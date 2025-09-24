#!/usr/bin/env ts-node
import { Address, getContract, encodeEventTopics } from 'viem';
import { loadArtifact, makeClients, requireEnv } from './_utils';

(async () => {
  try {
    const { publicClient } = makeClients();
    const { abi } = loadArtifact();
    const token = requireEnv('TOKEN_ADDRESS') as Address;

    // Pull ABI items for Transfer & Approval
    const transferAbi = abi.find((x: any) => x.type === 'event' && x.name === 'Transfer');
    const approvalAbi = abi.find((x: any) => x.type === 'event' && x.name === 'Approval');
    if (!transferAbi || !approvalAbi) {
      console.error('Transfer/Approval events not found in ABI');
      process.exit(1);
    }

    const current = await publicClient.getBlockNumber();
    const fromBlock = current > 2000n ? current - 2000n : 0n;
    const toBlock = current;

    console.log(`Querying logs for last ~2000 blocks [${fromBlock}..${toBlock}]`);

    // Transfer logs
    const transferLogs = await publicClient.getLogs({
      address: token,
      fromBlock,
      toBlock,
      events: [transferAbi as any]
    });

    // Approval logs
    const approvalLogs = await publicClient.getLogs({
      address: token,
      fromBlock,
      toBlock,
      events: [approvalAbi as any]
    });

    console.log('\nTransfers:');
    for (const l of transferLogs) {
      const { args } = l as any;
      console.log(
        `  block=${l.blockNumber?.toString()} from=${args?.from} to=${args?.to} value=${args?.value?.toString()}`
      );
    }

    console.log('\nApprovals:');
    for (const l of approvalLogs) {
      const { args } = l as any;
      console.log(
        `  block=${l.blockNumber?.toString()} owner=${args?.owner} spender=${args?.spender} value=${args?.value?.toString()}`
      );
    }

    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
