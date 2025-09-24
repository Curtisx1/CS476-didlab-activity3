# Assignment 3: Production-Style ERC-20 on DIDLab

**Hardhat v3 + Viem Implementation**

For assignment 3, I built upon this project, adding the required files to create a production-ready ERC-20 token implementation.

## Files Created

### Core Files
- **`utils.ts`** - Utility functions to help with contracts and scripts. Very helpful in avoiding errors.
- **`CampusCreditV3.sol`** - Main contract implementation
- **`deploy2.ts`** - Deploys the CampusCreditV3 contract

### Analysis & Testing Scripts
- **`airdropVsSingles.ts`** - Compares airdropping vs single transactions, specifically analyzing GWEI fees
- **`transfer-approve2.ts`** - Handles transfer and approve transactions
- **`logs.ts`** - Transaction logging script

## Network Configuration

### Important Information
- **Team5 RPC URL:** `https://hh-05.didlab.org`
- **Chain ID:** `31341`
- **Token Address:** `0x5fbdb2315678afecb367f032d93f642f64180aa3`

## How to Run

### Deploy Contract
```bash
npx hardhat run scripts/deploy2.ts --network didlab
```

### Transfer Tokens
```bash
npx hardhat run scripts/transfer-approve2.ts --network didlab
```

### Compare Airdrops vs Single Transactions
```bash
npx hardhat run scripts/airdropVsSingles.ts --network didlab
```

### View Transaction Logs
```bash
npx hardhat run scripts/logs.ts --network didlab
```

## Console Output Screenshots

### Deploy
![Deploy Output](https://github.com/user-attachments/assets/06324db8-a856-4320-afe7-859af7df8698)
*Contract deployment console output*

### Transfer and Approve
![Transfer and Approve Output](https://github.com/user-attachments/assets/14b9647d-cf38-4e48-8b08-90c6693503fa)
*Transfer and approve transactions console output*

### Airdrop vs Singles Analysis
![Airdrop vs Singles Output](https://github.com/user-attachments/assets/aab6ed88-f1af-4eb5-8887-12495a10e71f)
*Gas fee comparison between airdrop and single transactions*

### Transaction Logs
![Logs Output](https://github.com/user-attachments/assets/d6d53e8f-379c-4e28-90f5-cecd22695e21)
*Transaction logging console output*

## MetaMask Integration

### Network Setup
![MetaMask Network Setup](https://github.com/user-attachments/assets/bb1b4338-4d81-4e44-9c37-dfc6b686483e)
*MetaMask custom network configuration*

### Token Transfers

#### Sending CAMP Tokens
![Sending CAMP to MetaMask](https://github.com/user-attachments/assets/384ec540-ba0a-4f51-8a4e-1494bbb5cde4)
*Console output when sending CAMP tokens to MetaMask*

#### Receiving in MetaMask
![Received in MetaMask](https://github.com/user-attachments/assets/fe018422-2870-4305-abaf-3ea839a56208)
*CAMP tokens successfully received in MetaMask wallet*

#### Large Transfer (100,000 CAMP)
![Sending 100k CAMP](https://github.com/user-attachments/assets/88f2ca6a-e230-4363-88ca-e8832ed926cb)
*Console output for 100,000 CAMP token transfer*

![100k CAMP Received](https://github.com/user-attachments/assets/1a47982c-414b-48a6-a978-e712c50215aa)
*100,000 CAMP tokens successfully received! 🎉*

### MetaMask Settings
![MetaMask Settings](https://github.com/user-attachments/assets/849c0778-6326-473b-8057-fe75dc569b6d)
*MetaMask wallet settings and token configuration*
