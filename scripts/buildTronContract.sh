#!/bin/sh
set -x

CURR_PATH=`dirname $0`
PROJ_PATH=${CURR_PATH}/../

if [[ `uname` == 'Darwin' ]]; then
  URL="https://github.com/tronprotocol/solidity/releases/download/tv_0.7.7/solidity-mac_0.7.7_Bacon_v4.3.zip"
  TAR="solidity-mac_0.7.7_Bacon_v4.3.zip"
  EXEC_NAME="solc"
elif [[ `uname` == 'Linux' ]]; then
  URL="https://github.com/tronprotocol/solidity/releases/download/tv_0.8.11/solidity-linux_0.8.11_Rousseau_v4.4.zip"
  TAR="solidity-linux_0.8.11_Rousseau_v4.4.zip"
  EXEC_NAME="solc-static-linux"
fi

if [ ! -f "${TAR}" ]; then
  curl ${URL} -O -J -L
fi

sleep 1

if [ !  -f "${TAR}" ]; then
  echo "Download ${URL} failed"
else
  rm -Rf ${PROJ_PATH}/.temp
  unzip ${TAR} -d ${PROJ_PATH}/.temp/
  SOLC_BIN=${PROJ_PATH}/.temp/${EXEC_NAME}
  chmod 777 ${SOLC_BIN}
fi

mkdir -p ${PROJ_PATH}/build/tron-contracts

${SOLC_BIN} --optimize --overwrite --abi --bin ${PROJ_PATH}/tron-contracts/Verifier.sol -o ${PROJ_PATH}/build/tron-contracts
${SOLC_BIN} --optimize --overwrite --abi --bin ${PROJ_PATH}/tron-contracts/ETHTornado.sol -o ${PROJ_PATH}/build/tron-contracts
${SOLC_BIN} --optimize --overwrite --abi --bin ${PROJ_PATH}/tron-contracts/ERC20Tornado.sol -o ${PROJ_PATH}/build/tron-contracts

node ${CURR_PATH}/compileHasher.js
cp ${PROJ_PATH}/build/Hasher.json ${PROJ_PATH}/build/tron-contracts

