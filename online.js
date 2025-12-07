import { publicClient } from './client.js'
import { wagmiAbi } from './abi.js'
import { formatUnits } from 'viem'

export async function getETHBalance(address){
    return await publicClient.getBalance({address})
}

export async function getTokenBalance(address, token, decimals = 0){
    return formatUnits(await publicClient.readContract({
        address: token,
        abi: wagmiAbi,
        functionName: 'balanceOf',
        args: [address]
    }), decimals)
}

export async function getNonce(address){
    return await publicClient.getTransactionCount({address})
}

export async function broadcastTx(tx){
    return await publicClient.sendRawTransaction({
        serializedTransaction: tx
    })
}

