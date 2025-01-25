const { MerkleTree } = require('merkletreejs')
const SHA256 = require('crypto-js/sha256')

const leaves = [
    "0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5",
    "0xBA401CdaC1A3b6AEeDe21c9C4a483be6C29F88C5",
    "0x8aeBF766fC6b1199d85C8257c847A1D98682121A",
    "0x9c7e96f7D2D3394957CEC6535457Af75eA40cCEe",
    "0xE94f1fa4F27D9d288FFeA234bB62E1fBC086CA0c",
    "0x73f7b1184B5cD361cC0f7654998953E2a251dd58",
    "0x239393A9F23811Ce37BB3b5175f280Fbcd51EA6B",
    "0x499B8592FA2a7EA8A7051B88920aaF5a058ceC32"
].map(x => SHA256(x))
const tree = new MerkleTree(leaves, SHA256)
const root = tree.getRoot().toString('hex')
const leaf = SHA256('0x9c7e96f7D2D3394957CEC6535457Af75eA40cCEe')
const proof = tree.getProof(leaf)
console.log(tree.verify(proof, leaf, root))
