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

    // 
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
