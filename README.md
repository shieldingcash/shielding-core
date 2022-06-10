### Fork from [tornado.cache](https://github.com/tornadocash/tornado-core)

### How to deploy A new instance on BTTC

 * Build contract

```
npm install
npm run build:contract
```

 * Prepare your env 

```
cp .env.sample .env
```

Carefully edit your .env attribute: `PRIVATE_KEY`, `ETH_TOKEN`

 * Deploy bttc contract

Step 1: Deploy verifier and hasher contract(Note: only run once each net)

```
truffle migrate --network donau --reset -f 2 --to=3   // testnet
truffle migrate --network mainnet --reset -f 2 --to=3  // mainnet
```

Step 2: Deploy BTT instance contract

```
truffle migrate --network donau -f 4 --to=4  // testnet
truffle migrate --network mainnet -f 4 --to=4  // mainnet
```

Step3: Deploy ERC20 token instance contract

```
truffle migrate --network donau -f 5 --to=5  // testnet
truffle migrate --network mainnet -f 5 --to=5  // mainnet
```

### Deployed contract list





