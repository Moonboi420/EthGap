# EthGap
Stupid simple technology for sending ETH and ERC-20 transactions from air gapped cold storage. #QR #node #CLI

This system has an online part, and an offline part. Both use node so you can run it on any windows, mac or linux with no problem.
The online part can check the ETH or token balance of your addresses, and broadcast transactions. It has no need to see your private keys or seed phrase.
The offline part can generate seed phrases, private keys, and create transactions. It has no need for internet connection and exports the transactions as qr codes for broadcasting.

I recommend running the offline part on a device with radios (wifi, bluetooth, etc...) removed. You might like to use tails and paper wallets so that the private keys are never stored digitally.

CAUTION: INSTALL SOFTWARE BEFORE REMOVING RADIOS ;)

## Getting Started
- Download and unzip the pre-built zip. (https://github.com/Moonboi420/EthGap/releases/tag/1.0.0)
- In the EthGap folder run `node -i offline.js` or `node -i online.js`
- Now you can call the functions provided in the code.

- Caution: Whether you use the provided node-modules (unverified) or install your own, supply chain (malicious software) attacks are possible in theory.
- Therefore you MUST always verify the QR codes produced by `output.js`, ideally offline. Check that they are not leaking your seed phrase or making unauthorised transactions!

## Workflow
- Use the Online part to check your balance.
- IMPORTANT: Get the latest nonce for your address.
- Input your seed phrase to the Offline part and use it to create a signed transaction.
- Export the signed transaction as a QR code.
- Verify that the QR code is not leaking your seed phrase or making an unauthorised transaction.
- Scan: https://scanqr.org/#scan.
- Use the Online part to broadcast the signed transaction.

## Story
I am not a developer just some kid with a Grok account.
I just wanted to sign Eth transactions offline in tails for security and was shocked that the fucking shit eth ecosystem couldn't even do that one simple thing.

Let me know if you have any feedback or if you find any bugs or if you want to add anything.
