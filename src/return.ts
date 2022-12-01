import BigNumber from 'bignumber.js';
import {setup} from './config';

(async () => {

    const {
        causeus,
        goerly,
        goerlySigner,
        factory
        
    } = await setup();

    console.log("Listing NFTs for Goerly...");
    
    const nfts = await factory.nftList(
        goerly,
        goerlySigner.address
    );

    console.log("Found NFTs:", nfts.length);
    
    const selected = nfts[0];

    console.log("Selected:", selected);

    console.log("Approving an NFT for Goerly...");

    const approved = await goerly.approveForMinter(
        selected,
        goerlySigner,
        new BigNumber(0)
    );

    console.log("Approved for Goerly:", approved);

    console.log("Transferring an NFT from Goerly...");
    
    const result = await factory.transferNft(
        goerly,
        causeus,
        selected,
        goerlySigner,
        goerlySigner.address
    );
    
    console.log("Transferred:", result);

    process.exit(0)
})().catch(e => {
    console.error(e);
    process.exit(1);
});