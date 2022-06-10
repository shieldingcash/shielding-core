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
npx truffle migrate --network donau --reset -f 2 --to=3   // testnet
npx truffle migrate --network mainnet --reset -f 2 --to=3  // mainnet
```

Step 2: Deploy BTT instance contract.

```
npx truffle migrate --network donau -f 4 --to=4  // testnet
npx truffle migrate --network mainnet -f 4 --to=4  // mainnet
```

Step 2: Deploy ERC20 token instance contract.

```
npx truffle migrate --network donau -f 5 --to=5  // testnet
npx truffle migrate --network mainnet -f 5 --to=5  // mainnet
```

### Deployed contract list

| Net name | Token | amount | address |
|---------|--------|-------|---------|
| BTTC testnet | BTT | 100000000000000000000000000 Wei | 0xA34C619bEC89218cbb7dE9940190b3e3cD196d52 |
| BTTC testnet | BTT | 1000000000000000000000000000 Wei | 0x33804B6E0fA783b2d064F30748F36124c2027549  |
| | | | |
| BTTC mainnet | BTT | 100000000000000000000000000 Wei | 0xA34C619bEC89218cbb7dE9940190b3e3cD196d52 | 
| BTTC mainnet | BTT | 1000000000000000000000000000 Wei | 0x33804B6E0fA783b2d064F30748F36124c2027549 |




