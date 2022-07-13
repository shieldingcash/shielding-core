### Fork from [tornado.cash](https://github.com/tornadocash/tornado-core)
[![build](https://github.com/shieldingcash/shielding-core/actions/workflows/build.yml/badge.svg)](https://github.com/shieldingcash/shielding-core/actions/workflows/build.yml)

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
| BTTC testnet | BTT | 10000 | 0x8F78Eb4E18F18a166543d7E6648AFa99e80934D0 |
|  | BTT | 100000 | 0x894162989237DcF463c108889f514Ef7a995dDF5 |
|  | BTT | 100000000 | 0xA34C619bEC89218cbb7dE9940190b3e3cD196d52 |
|  | BTT | 1000000000 | 0x33804B6E0fA783b2d064F30748F36124c2027549  |
| | | | |
| BTTC mainnet | BTT | 1000 | 0x793431607Ec6265fa309596b8629f9b30e3ACB07 | 
|  | BTT | 100000000 | 0xA34C619bEC89218cbb7dE9940190b3e3cD196d52 | 
|  | BTT | 1000000000 | 0x33804B6E0fA783b2d064F30748F36124c2027549 |
|  | USDT_t | 100 | 0x8F78Eb4E18F18a166543d7E6648AFa99e80934D0 |
|  | USDT_t | 1000 | 0x7B1849b6073138EA9f3BD396509f78989E1E254E |
|  | USDT_t | 10000 | 0xd086681E5b0933Fe7C35DEBA18b363760A852007 |





