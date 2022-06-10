### Fork from [tornado.cache](https://github.com/tornadocash/tornado-core)

### How to deploy a new shielding.cache instance on BTTC

 * Build contract

```
npm install
npm run build:contract
```

 * Prepare your env 

```
npm run migrate:donau
cp .env.sample .env
```

Carefully edit your .env attribute: `PRIVATE_KEY`, `ETH_TOKEN`

 * Deploy bttc contract

Step 1: Deploy verifier and hasher contract `Note: only run once each net`
```
truffle migrate --network donau|mainet --reset -f 2 --to=3
```

Step 2: Deploy bttc token

```
truffle migrate --network donau|mainet -f 4 --to=4
```

Step3: Deploy erc20 token

```
truffle migrate --network donau|mainet -f 5 --to=5
```

## Deployed address



