# Merkle Tree example with JavaScript

## Introduction
The code above can be used to create a merkle tree of addresses and test if an address is part of the merkle tree

## How to setup
- Clone the repository
- Open the repository root folder using VS Code
- Open a terminal on VS Code and run the command `npm install`
- Replace the addresses with the ones you want to use.
- Replace the address in the line `const leaf = SHA256('0x9c7e96f7D2D3394957CEC6535457Af75eA40cCEe')` with the address you want to prove is in the merkle tree.
- After that, run the command `npm start`

## Result
You should see a true being printed if the address you're testing for is in the merkle tree and false if it's not in the merkle tree.
