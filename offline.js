import { english, generateMnemonic, mnemonicToAccount } from 'viem/accounts'
import { parseGwei, parseEther, parseUnits, encodeFunctionData } from 'viem'
import fs from 'fs'
import QRCode from 'qrcode'

export function generateSeed(){
    return generateMnemonic(english)
}

export function generateAddress(seed, i){
    return mnemonicToAccount(seed, { addressIndex: i }).address
}

export function getAccount(address, seed, limit = 10){
    let account;
    for( let i = 0; i < limit; i++ ){
        account = mnemonicToAccount(seed, { addressIndex: i })
        if( account.address == address) return account
    }
    throw Error(`Private Key for ${address} not Found after trying ${limit} indicis.`)
}

export async function sendEth(from, to, value, nonce, seed, keySearchLimit = 10){
    let account = getAccount(from, seed, keySearchLimit)
    return await account.signTransaction({
        value: value,
        chainId: 1,
        maxFeePerGas: parseGwei('20'),
        maxPriorityFeePerGas: parseGwei('3'),
        gas: 21000n,
        nonce: nonce,
        to: to
    })
}
    
const erc20 = [
  {
    name: 'transfer',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' }
    ],
    outputs: [{ name: '', type: 'bool' }]
  }
];

export async function sendToken(from, to, token, amount, decimals, nonce, seed, keySearchLimit = 10) {
    let account = getAccount(from, seed, keySearchLimit)

    const data = encodeFunctionData({
        abi: erc20,
        functionName: 'transfer',
        args: [
            to,
            BigInt(Math.trunc(amount * 10 ** decimals))
        ]
    })

    return account.signTransaction({
        chainId: 1,
        maxFeePerGas: parseGwei('20'),
        maxPriorityFeePerGas: parseGwei('3'),
        gas: 60000n,
        nonce: nonce,
        to: token,
        data: data,
        value: 0n
    })
}

export async function exportTx(tx, file = './qr.png'){
    const buffer = await QRCode.toBuffer(tx, { type: 'png' })
    fs.writeFileSync(file, buffer)
    console.log(`QR code saved to ${file}`)
}
