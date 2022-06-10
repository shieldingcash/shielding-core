### Fork from [tornado.cache](https://github.com/tornadocash/tornado-core)

### How to deploy A new instance on BTTC

1. Build contract

```
npm install
npm run build:contract
```

2. Prepare your env 

```
cp .env.sample .env
```

Carefully edit your .env attribute: `PRIVATE_KEY`, `ETH_AMOUNT`.

3. Deploy bttc contract

Step 1: Deploy verifier and hasher contract(Note: only run once each net).

```
truffle migrate --network donau --reset -f 2 --to=3   // testnet
truffle migrate --network mainnet --reset -f 2 --to=3  // mainnet
```

Step 2: Deploy BTT instance contract.

```
truffle migrate --network donau -f 4 --to=4  // testnet
truffle migrate --network mainnet -f 4 --to=4  // mainnet
```

Step 2: Deploy ERC20 token instance contract.

```
truffle migrate --network donau -f 5 --to=5  // testnet
truffle migrate --network mainnet -f 5 --to=5  // mainnet
```

### Deployed contract list

| Net name | Token | amount | address |
|---------|--------|-------|---------|
| BTTC testnet | BTT | 10000 | 0xe7618FD19926112eBf2C5d871Fab9d8CB41A5ECa |
| BTTC testnet | BTT | 100000 | 0x8A159488dEe4F7907AAB161ec3A47FC968629185 |
| BTTC testnet | BTT | 1000000 | 0x3f7264385968Deb7F32b5283D7Dc3bdA0221074e |
| BTTC testnet | BTT | 10000000 | 0x2C6A7442268F9ca36ebC4a43c173b9947E2b90f5 |
| | | | |
| BTTC mainnet |||| 



