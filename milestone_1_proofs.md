# Milestone-1 Proofs

## 1. Validation proofs

Correct Validation logic can be easily provved by the successfully relayed transactions:

|Direction|Chain|Links|Depatrure/Arrival Time|
|:-:|:-:|:-:|:-:|
|From|Caduceus|[link](https://galaxy.scan.caduceus.foundation/tx/0x992994d86369c12aa39ab65002169bc2ed2bb9f7fc44558dd8a60b1a0a8540ce#eventlog)|Dec-1-2022 01:39:37 PM +UTC|
|To|Goerly|[link](https://goerli.etherscan.io/tx/0x85ffc4c4ddbf69948e51736a908e52fdf00f416fb38a1da7d3c89db914421114)|Dec-01-2022 01:40:00 PM +UTC|
|From|Goerly|[link](https://goerli.etherscan.io/tx/0x90365ffa8ba9df1402a20b84dd3ef3b5f212a0b11d60bc604f2e83567b3056ba)|Dec-01-2022 02:56:00 PM +UTC|
|To|Caduceus|[link](https://galaxy.scan.caduceus.foundation/tx/0x1f9cd96337fd423b2d3176d020d5b272f528bbe69ca2e1670a0dba590786e2f6)|Dec-1-2022 02:56:01 PM +UTC|

## 2. NFT-Indexer

NFT Indexer fetches NFTs by a chainId & a user address (Public Key)

API: `<base-url>/nfts/<chainId>/<user-address>`

Since Caduceus was assigned chainId `35` and example request on the testnet could have the form:

https://testnet-notifier.xp.network/testnet-indexer/nfts/35/0x0d7df42014064a163DfDA404253fa9f6883b9187

In case the user has no NFTs the response would be:

```json
{
    "status": "ok",
    "code": 200,
    "data": []
}
```

In case the looked-up account has NFTs the responce can look like this:

```json
{
    "status": "ok",
    "code": 200,
    "data": [
        {
            "uri": "https://meta.polkamon.com/meta?id=10001419693",
            "native": {
                "chainId": "35",
                "tokenId": "1",
                "owner": "0x0d7df42014064a163DfDA404253fa9f6883b9187",
                "contract": "0x34933A5958378e7141AA2305Cdb5cDf514896035",
                "symbol": "UMT",
                "name": "UserNftMinter",
                "uri": "https://meta.polkamon.com/meta?id=10001419693",
                "contractType": "ERC721"
            },
            "collectionIdent": "0x34933A5958378e7141AA2305Cdb5cDf514896035"
        }
    ]
}
```

## 3. TX fee estimation

To estimate the transaction fees you can use our JS library:

```ts
import { setup } from './config';
import { exit } from 'process';
import { EthNftInfo, NftInfo } from 'xp.network';
import BigNumber from 'bignumber.js';

/* Testing the above */
(async () => {

    const {
        causeus,
        goerly,
        signer,
        factory
    } = await setup();

    // Dummy for an NFT
    const selected: NftInfo<EthNftInfo> = {
        uri: "",
        collectionIdent: "",
        native: {
            chainId: "35",
            tokenId: "",
            owner: "",
            uri: "",
            contract: "",
            contractType: "ERC721"
        }
    }

    const estimation: BigNumber = await factory.estimateFees(
        causeus,
        goerly,
        selected,
        signer.address
    )

    console.log("Estimation:", estimation.toString());

    exit(0);
})().catch(e => {
    console.error(e);
    exit(1)
});
```


## 4. Node integration

We've integrated via a public Testnet RPC node:

```
https://galaxy.block.caduceus.foundation
```

Where: `https://github.com/XP-NETWORK/xpjs/blob/secretjs/src/consts.ts#L63`

## 5. Smart Contracts deployment on testnet

|Contract name|Link|Role|
|:-:|:-:|:-:|
|Bridge|[0x3fe9EfFa80625B8167B2F0d8cF5697F61D77e4a2](https://galaxy.scan.caduceus.foundation/address/0x3fe9EfFa80625B8167B2F0d8cF5697F61D77e4a2?p=1)|Contracts |
|Default ERC-721|[0x8CEe805FE5FA49e81266fcbC27F37D85062c1707](https://galaxy.scan.caduceus.foundation/address/0x8CEe805FE5FA49e81266fcbC27F37D85062c1707?p=1)|Ledger of the foreign ERC-721 tokens|
|Default ERC-1155|[0xeBCDdF17898bFFE81BCb3182833ba44f4dB25525](https://galaxy.scan.caduceus.foundation/address/0xeBCDdF17898bFFE81BCb3182833ba44f4dB25525?p=1)|Ledger of the foreign ERC-1155 tokens|
|UserNftMInter (UMT)|[0x34933A5958378e7141AA2305Cdb5cDf514896035](https://galaxy.scan.caduceus.foundation/address/0x34933A5958378e7141AA2305Cdb5cDf514896035?p=1)|ERC-721 for testing|
|ERC1155Minter|[0x9cdda01E00A5A425143F952ee894ff99B5F7999F](https://galaxy.scan.caduceus.foundation/address/0x9cdda01E00A5A425143F952ee894ff99B5F7999F?p=1)|ERC-1155 for testing|

