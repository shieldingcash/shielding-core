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
    headers: { "TRON-PRO-API-KEY":  "62005bed-e0b5-4a24-98c6-3dccd40ddeca" },
    privateKey: privateKey
  });
}

async function query() {
  let instance = await tronWeb.contract().at('TFQ8dsNqkQL5dRDjD9ZoMPSXsghdcAKc77');
  console.log((await instance.methods.denomination().call()).toNumber())

  // let instance = await tronWeb.contract().at('TPC5P7qJWT7N68cxY8NcmZjo8jvNR3rvit');
  // console.log(await instance.methods.MiMCSponge(123, 234).call())
}

function main() {
  init()
  query()
}

main()
