# EthGap
Stupid simple technology for sending ETH and ERC-20 transactions from air gapped cold storage. #QR #node #CLI

This system has an online part, and an offline part. Both use node so you can run it on any windows, mac or linux with no problem.
The online part can check the ETH or token balance of your addresses, and broadcast transactions. It has no need to see your private keys or seed phrase.
The offline part can generate seed phrases, private keys, and create transactions. It has no need for internet connection and exports the transactions as qr codes for broadcasting.

I recommend running the offline part on a device with radios (wifi, bluetooth, etc...) removed. You might like to use tails and paper wallets so that the private keys are never stored digitally.
CAUTION: INSTALL THIS BEFORE REMOVING RADIOS ;)

## Installation guide (same for online and offline parts)
- Install node and npm if not already installed
- Make a folder
- Open terminal in folder
- npm init -y
- npm install viem qrcode (qrcode only neccesary for offline part)

## Use guide
- Open terminal in folder
- node
- w = await import('./offline.js') [OR online.js!]
Now you can use the functions provided in the code.

## Workflow
- Use the Online part to check your balance.
- Input your seed phrase to the Offline part and use it to create a signed transaction.
- Export the signed transaction as a QR code.
- Scan: https://scanqr.org/#scan.
- Use the Online part to broadcast the signed transaction.

## Story
I am not a developer just some kid with a Grok account.
I just wanted to sign Eth transactions in tails for security and was shocked that the fucking shit eth ecosystem couldn't even do that one simple thing.

Let me know if you have any feedback or if you find any bugs or if you want to add anything.
