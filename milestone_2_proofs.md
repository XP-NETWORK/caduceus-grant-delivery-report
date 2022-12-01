# A basic Caduceus bridging tutorial using XPJS (for games & Marketplaces)

## 0. Seting the project

```bash
git clone https://github.com/XP-NETWORK/caduceus-grant-delivery-report.git
cd caduceus-grant-delivery-report/
yarn
touch .env
echo "SK=<replace with your caduceus private key>" >> .env
```

## 1. Minting

To test the functionality - mint an NFT running in the terminal:

```bash
yarn mint
```

Example output:

```bash
$ tsc && node ./dist/mint.js
Minting NFTs on Caduceus...
Minted https://meta.polkamon.com/meta?id=10001419693 {
  nonce: 10,
  gasPrice: BigNumber { _hex: '0x012a05f200', _isBigNumber: true },
  gasLimit: BigNumber { _hex: '0x0f4240', _isBigNumber: true },
  to: '0x34933A5958378e7141AA2305Cdb5cDf514896035',
  value: BigNumber { _hex: '0x00', _isBigNumber: true },
  data: '0xd85d3d270000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002d68747470733a2f2f6d6574612e706f6c6b616d6f6e2e636f6d2f6d6574613f69643d313030303134313936393300000000000000000000000000000000000000',
  chainId: 512512,
  v: 1025059,
  r: '0xca152ca09a2bcc86eee1cca5823b55d10b5df069de90e314c00f93d20a4b539b',
  s: '0x4a0e4138acce91f0601b183d75be71590ea7becbf83fac3fc6c2b41f55ff2521',
  from: '0x0d7df42014064a163DfDA404253fa9f6883b9187',
  hash: '0xf51363e8017adaaa5a18e739285bfcc1c133601ab5b1505a6a0bcdd024542ab3',
  type: null,
  confirmations: 0,
  wait: [Function (anonymous)]
}
✨  Done in 7.71s.
```

For the TX proof take the hash above and search it in the chain explorer:

Link: `https://galaxy.scan.caduceus.foundation/tx/0xf51363e8017adaaa5a18e739285bfcc1c133601ab5b1505a6a0bcdd024542ab3#`

## 2. Getting the list of owned NFTs

To see your NFTs:
1. Uncomment lines 25-34 in the `./src/approve.ts` file
2. Run in the terminal the command below
3. Comment lines 25-34 in the `./src/approve.ts` file to be able to use the `approve` function in the other files.

```bash
yarn list_nfts
```

Example output:

```bash
$ tsc && node ./dist/list.js
Listing NFTs for Caduceus:
On Caduceus Found NFTs: 1
[
  {
    uri: 'https://meta.polkamon.com/meta?id=10001419693',
    native: {
      chainId: '35',
      tokenId: '1',
      owner: '0x0d7df42014064a163DfDA404253fa9f6883b9187',
      contract: '0x34933A5958378e7141AA2305Cdb5cDf514896035',
      symbol: 'UMT',
      name: 'UserNftMinter',
      uri: 'https://meta.polkamon.com/meta?id=10001419693',
      contractType: 'ERC721'
    },
    collectionIdent: '0x34933A5958378e7141AA2305Cdb5cDf514896035'
  }
]
✨  Done in 5.29s.
```

## 3. Approving

To approve a selected NFT:
1. Uncomment lines 25-38 in the `./src/list.ts` file
2. Run in the terminal the command below
3. Comment lines 25-38 in the `./src/list.ts` file to be able to use the `list` function in the other files.

```bash
yarn approve
```

Example output:

```
$ tsc && node ./dist/approve.js
Listing NFTs for Caduceus:
On Caduceus Found NFTs: 1
Selected: {
  uri: 'https://meta.polkamon.com/meta?id=10001419693',
  native: {
    chainId: '35',
    tokenId: '1',
    owner: '0x0d7df42014064a163DfDA404253fa9f6883b9187',
    contract: '0x34933A5958378e7141AA2305Cdb5cDf514896035',
    symbol: 'UMT',
    name: 'UserNftMinter',
    uri: 'https://meta.polkamon.com/meta?id=10001419693',
    contractType: 'ERC721'
  },
  collectionIdent: '0x34933A5958378e7141AA2305Cdb5cDf514896035'
}
Approving NFTs for Caduceus...
Approved: 0x6d14654309eed3b0dc7924c537308d8826239f24e0e26c2ba64c3587e8a68568
✨  Done in 16.57s.
```

To double check take the hash above and search it in the chain explorer:

Link: `https://galaxy.scan.caduceus.foundation/tx/0x6d14654309eed3b0dc7924c537308d8826239f24e0e26c2ba64c3587e8a68568`

## 4. Transferring from Caduceus

To trasnfer from Caduceus run in the terminal:

```bash
yarn transfer
```

Transactions

|Direction|Chain|Links|Depatrure/Arrival Time|
|:-:|:-:|:-:|:-:|
|From|Caduceus|[link](https://galaxy.scan.caduceus.foundation/tx/0x992994d86369c12aa39ab65002169bc2ed2bb9f7fc44558dd8a60b1a0a8540ce#eventlog)|Dec-1-2022 01:39:37 PM +UTC|
|To|Goerly|[link](https://goerli.etherscan.io/tx/0x85ffc4c4ddbf69948e51736a908e52fdf00f416fb38a1da7d3c89db914421114)|Dec-01-2022 01:40:00 PM +UTC|

## 5. Returning from Goerly to Caduceus

Make sure you selected the right NFT & run in the terminal:

```bash
yarn return
```

Example output:

```bash
$ tsc && node ./dist/return.js
Listing NFTs for Goerly...
Found NFTs: 10
Selected: {
  uri: 'https://bridge-wnftapi.herokuapp.com/w/30804254670335988780446455709',
  native: {
    chainId: '5',
    tokenId: '30804254670335988780446455709',
    contract: '0x33DC209D33AddF60cf90Dd4B10f9a198A1A93f63',
    owner: '0x0d7df42014064a163DfDA404253fa9f6883b9187',
    uri: 'https://bridge-wnftapi.herokuapp.com/w/30804254670335988780446455709',
    symbol: 'XPNFT',
    name: 'XPNFT',
    contractType: 'ERC721'
  },
  collectionIdent: '0x33DC209D33AddF60cf90Dd4B10f9a198A1A93f63'
}
Approving an NFT for Goerly...
Approved for Goerly: 0xc13127bcc4cf00ac0c5166d4b313fedae546be40d444f4a4a476cd21e017610d
Transferring an NFT from Goerly...
390746508531319
{
  type: 2,
  chainId: 5,
  nonce: 41,
  maxPriorityFeePerGas: BigNumber { _hex: '0x59682f00', _isBigNumber: true },
  maxFeePerGas: BigNumber { _hex: '0x5968322a', _isBigNumber: true },
  gasPrice: null,
  gasLimit: BigNumber { _hex: '0x019f6b', _isBigNumber: true },
  to: '0x04a5f9158829Cae5a0a549954AdEaBD47BbB3d2d',
  value: BigNumber { _hex: '0x016361c2d69677', _isBigNumber: true },
  data: '0x040833bd0000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000002300000000000000000000000000000000000000006388aea7c4cce1f7d17f179d00000000000000000000000033dc209d33addf60cf90dd4b10f9a198a1a93f63000000000000000000000000000000000000000000000000000000000000002a30783064376466343230313430363461313633446644413430343235336661396636383833623931383700000000000000000000000000000000000000000000',
  accessList: [],
  hash: '0x90365ffa8ba9df1402a20b84dd3ef3b5f212a0b11d60bc604f2e83567b3056ba',
  v: 0,
  r: '0xc6bfbe4473c9ea349bcefc49ea59c2c14c95806e3bfc4ec1f8962b8b664f917b',
  s: '0x2b233aaa3d3f59fcd78f90cf04397dc1d826efb0e118c61bc30c05641c0b57f1',
  from: '0x0d7df42014064a163DfDA404253fa9f6883b9187',
  confirmations: 0,
  wait: [Function (anonymous)]
} res
Transferred: {
  type: 2,
  chainId: 5,
  nonce: 41,
  maxPriorityFeePerGas: BigNumber { _hex: '0x59682f00', _isBigNumber: true },
  maxFeePerGas: BigNumber { _hex: '0x5968322a', _isBigNumber: true },
  gasPrice: null,
  gasLimit: BigNumber { _hex: '0x019f6b', _isBigNumber: true },
  to: '0x04a5f9158829Cae5a0a549954AdEaBD47BbB3d2d',
  value: BigNumber { _hex: '0x016361c2d69677', _isBigNumber: true },
  data: '0x040833bd0000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000002300000000000000000000000000000000000000006388aea7c4cce1f7d17f179d00000000000000000000000033dc209d33addf60cf90dd4b10f9a198a1a93f63000000000000000000000000000000000000000000000000000000000000002a30783064376466343230313430363461313633446644413430343235336661396636383833623931383700000000000000000000000000000000000000000000',
  accessList: [],
  hash: '0x90365ffa8ba9df1402a20b84dd3ef3b5f212a0b11d60bc604f2e83567b3056ba',
  v: 0,
  r: '0xc6bfbe4473c9ea349bcefc49ea59c2c14c95806e3bfc4ec1f8962b8b664f917b',
  s: '0x2b233aaa3d3f59fcd78f90cf04397dc1d826efb0e118c61bc30c05641c0b57f1',
  from: '0x0d7df42014064a163DfDA404253fa9f6883b9187',
  confirmations: 0,
  wait: [Function (anonymous)]
}
✨  Done in 14.39s.
```

Checking the transactions:

|Direction|Chain|Links|Depatrure/Arrival Time|
|:-:|:-:|:-:|:-:|
|From|Goerly|[link](https://goerli.etherscan.io/tx/0x90365ffa8ba9df1402a20b84dd3ef3b5f212a0b11d60bc604f2e83567b3056ba)|Dec-01-2022 02:56:00 PM +UTC|
|To|Caduceus|[link](https://galaxy.scan.caduceus.foundation/tx/0x1f9cd96337fd423b2d3176d020d5b272f528bbe69ca2e1670a0dba590786e2f6)|Dec-1-2022 02:56:01 PM +UTC|
