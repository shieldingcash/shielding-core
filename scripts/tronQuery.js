const TronWeb = require('tronweb')
const fs = require("fs")
const program = require('commander')

var rpcUrl = process.env.RPC_URL
var privateKey = process.env.PRIVATE_KEY
var contractPath = process.env.CONTRACT_PATH
var tronWeb = null;

function init() {
  tronWeb = new TronWeb({
    fullHost: rpcUrl,
    headers: { "TRON-PRO-API-KEY":  "88c10958-af7b-4d5a-8eef-6e84bf5fb809" },
    privateKey: privateKey
  });
}

async function query() {
  let instance = await tronWeb.contract().at('TPC5P7qJWT7N68cxY8NcmZjo8jvNR3rvit');
  console.log(await instance.methods.MiMCSponge(123, 234).call())
}

function main() {
  init()
  query()
}

main()
