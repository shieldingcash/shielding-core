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

async function deploy(name, abi, bytecode, params=[]) {
  let args = {
    feeLimit: 5000000000,
    callValue: 0,
    tokenId: "",
    tokenValue: 0,
    userFeePercentage: 10,
    originEnergyLimit: 10,
    abi: abi,
    bytecode: bytecode,
    parameters: params,
    name: name
  };
  console.log(args)
  try {
    let transactionObject = await tronWeb.transactionBuilder.createSmartContract(args, tronWeb.defaultAddress.hex)
    console.log('transaction=', transactionObject)
    const signedTransaction = await tronWeb.trx.sign(transactionObject, privateKey)
    if (!signedTransaction.signature) {
      console.log('Transaction was not signed properly')
      return false
    }
    const receipt = await tronWeb.trx.sendRawTransaction(signedTransaction)
    console.log('receipt result=', receipt)
    return true
  } catch (error) {
    console.log('we got error=', error)
  }
  return false
}

function deploy_fromjsonfile(contract_name, json_file, params=[]) {
  let hasher_json = JSON.parse(fs.readFileSync(contractPath + '/' + json_file).toString())
  let abi = JSON.stringify(hasher_json['abi'])
  abi = "{\"entrys\":" + abi + "}"
  let bytecode = JSON.stringify(hasher_json['bytecode'])
  bytecode = bytecode.substring(3, bytecode.length - 1)
  deploy(contract_name, abi, bytecode, params)
}

function deploy_fromfile(contract_name, abi_file, bin_file, params=[]) {
  let abi = fs.readFileSync(contractPath + '/' + abi_file).toString()
  abi = "{\"entrys\":" + abi + "}"
  let bytecode = fs.readFileSync(contractPath + '/' + bin_file).toString()

  deploy(contract_name, abi, bytecode, params)
}

function deploy_tornado(contract_name, abi_file, bin_file, params=[]) {
  let abi = fs.readFileSync(contractPath + "/" + abi_file).toString()
  abi = "{\"entrys\":" + abi + "}"
  let bytecode = fs.readFileSync(contractPath + '/' + bin_file).toString()

  deploy(contract_name, abi, bytecode, params)
}

function main() {
  program
    .option('-c --contract_name <contract name>', 'Hasher')
    .option('-v --verifier_address <verifier address>', 'TBwm5yVpkvGBdZUcowaWZKFVZvTAvZsfWS')
    .option('-h --hasher_address <hasher address>', 'TPC5P7qJWT7N68cxY8NcmZjo8jvNR3rvit')
    .option('-e --erc20_address <erc20 address>', '')
    .option('-p --pool_size <pool size>', 10000000)

  program
    .command('setup')
    .action(() => {
      init()
      let contract_name = program.contract_name
      if (contract_name == 'Hasher') {
	deploy_fromjsonfile(contract_name, contract_name + ".json")
      } else if (contract_name == 'Verifier') {
	deploy_fromfile(contract_name, contract_name + ".abi", contract_name + ".bin")
      } else if (contract_name == 'ETHTornado') {
	let params = [program.verifier_address, program.hasher_address, program.pool_size, 20]
	deploy_tornado(contract_name, contract_name + ".abi", contract_name + ".bin", params)
      } else if (contract_name == 'ERC20Tornado') {
	let params = [program.verifier_address, program.hasher_address, program.pool_size, 20, program.erc20_address]
	deploy_tornado(contract_name, contract_name + ".abi", contract_name + ".bin", params)
      } else {
	console.log(`unkown contract name: ${contract_name}`)
      }
    });
  try {
    program.parse(process.argv)
  } catch (e) {
    console.log('Error:', e)
    process.exit(1)
  }
}

main()
