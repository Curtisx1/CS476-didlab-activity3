# Assignment 3 — Production-Style ERC-20 on DIDLab (Hardhat v3 + Viem)

For **Assignment 3**, I built upon the base project and added the required files.  

---

## Files Created

- **_utils.ts** — Helper functions for contracts and scripts (avoided errors significantly).  
- **airdropVsSingles.ts** — Compares airdropping vs single transactions (focus on GWEI fees).  
- **deploy2.ts** — Deploys the `CampusCreditV3` contract.  
- **CampusCreditV3.sol** — Main contract.  
- **logs.ts** — Transaction logging script.  
- **transfer-approve2.ts** — Handles transfer and approve transactions.  

---

## How to Run

### Important Information
- **Team:** Team5  
- **RPC URL:** `https://hh-05.didlab.org`  
- **Chain ID:** `31341`  
- **Token Address:** `0x5fbdb2315678afecb367f032d93f642f64180aa3`  

### Commands
```bash
# Deploy Contract
npx hardhat run scripts/deploy2.ts --network didlab

# Transfer Tokens
npx hardhat run scripts/transfer-approve2.ts --network didlab

# Compare Airdrops vs Single Transactions
npx hardhat run scripts/airdropVsSingles.ts --network didlab

# View Transaction Logs
npx hardhat run scripts/logs.ts --network didlab



Console Output

Deploy:
<img width="642" height="199" alt="2025-09-23 20_53_08- env - CS476-didlab-activity3 - Visual Studio Code" src="https://github.com/user-attachments/assets/06324db8-a856-4320-afe7-859af7df8698" />

Transfer and approve:
<img width="1000" height="446" alt="2025-09-23 20_54_54- env - CS476-didlab-activity3 - Visual Studio Code" src="https://github.com/user-attachments/assets/14b9647d-cf38-4e48-8b08-90c6693503fa" />

Airdrop Vs Singles
<img width="690" height="259" alt="2025-09-23 20_55_56- env - CS476-didlab-activity3 - Visual Studio Code" src="https://github.com/user-attachments/assets/aab6ed88-f1af-4eb5-8887-12495a10e71f" />

Logs
<img width="1008" height="345" alt="2025-09-23 20_56_44- env - CS476-didlab-activity3 - Visual Studio Code" src="https://github.com/user-attachments/assets/d6d53e8f-379c-4e28-90f5-cecd22695e21" />

Metmask

setup network
<img width="431" height="633" alt="2025-09-23 21_00_17-Mozilla Firefox" src="https://github.com/user-attachments/assets/bb1b4338-4d81-4e44-9c37-dfc6b686483e" />

sent CAMP to Metamask
<img width="1003" height="449" alt="2025-09-23 21_06_59- env - CS476-didlab-activity3 - Visual Studio Code" src="https://github.com/user-attachments/assets/384ec540-ba0a-4f51-8a4e-1494bbb5cde4" />

received in Metamask
<img width="429" height="628" alt="2025-09-23 21_07_47-ERC-20 token contract — Mozilla Firefox" src="https://github.com/user-attachments/assets/fe018422-2870-4305-abaf-3ea839a56208" />

sent 100,000 camp :D
<img width="1018" height="454" alt="2025-09-23 21_08_05- env - CS476-didlab-activity3 - Visual Studio Code" src="https://github.com/user-attachments/assets/88f2ca6a-e230-4363-88ca-e8832ed926cb" />

received!
<img width="434" height="620" alt="2025-09-23 21_08_22-ERC-20 token contract — Mozilla Firefox" src="https://github.com/user-attachments/assets/1a47982c-414b-48a6-a978-e712c50215aa" />

settings
<img width="411" height="611" alt="image" src="https://github.com/user-attachments/assets/849c0778-6326-473b-8057-fe75dc569b6d" />




















# Activity 3 — Build, Deploy & Operate a Production-Style ERC-20 on DIDLab

I had to run this locally as the VM was down and I could not connect. I attempted to setup Metamask and ran into an issue due to the outage. 
---

## Token Address

<p align="center">
  <img width="638" height="279" alt="TOKEN_ADDRESS" src="https://github.com/user-attachments/assets/13861b2d-ce67-4bbf-a472-17d42c1d9936" />
</p>

---

## Deploy Block

<p align="center">
  <img width="638" height="279" alt="Deploy Block" src="https://github.com/user-attachments/assets/6e34122b-b28a-4910-8992-52b776a7ee16" />
</p>

---

## Roles & Cap

<p align="center">
  <img width="648" height="1139" alt="Roles & Cap" src="https://github.com/user-attachments/assets/25b2f131-c71a-46e0-940b-3fbb566e7f19" />
</p>

---

## MetaMask Issue (VM is down; unable to set up)

<p align="center">
  <img width="455" height="666" alt="MetaMask — VM down" src="https://github.com/user-attachments/assets/cdaf37bd-d131-4ca2-960b-1cc78d172858" />
</p>

---

## Console Output from `airdrop.ts` (Batch vs Singles Gas)

<p align="center">
  <img width="853" height="176" alt="Console output from airdrop.ts" src="https://github.com/user-attachments/assets/0effcdd4-177c-48ae-9731-abc1aef9ba70" />
</p>
