import {setup} from './config';
import {listNfts} from './list';

/**
 * Transferring NFTs from Moonbeam Alpha Example
 */
const transfer = async () => {

    const {
        factory,
        causeus,
        goerly,
        signer
    } = await setup();

    const NFTs = await listNfts(signer.address);

    // Selecting an NFT to transfer (the last on the list)
    const selected = NFTs[0];
    console.log('Selected:', selected);

    const result = await factory.transferNft(
        causeus,        // Origin
        goerly,         // Destination
        selected,       // Which NFT
        signer,         // Wallet
        signer.address, // Recipient (e.g. self)
        undefined,      // transaction fee | automatic
        undefined,      // target smart contract address or arrives to the default SC
        undefined,      // Gas Limit | automatic
        undefined       // Extra fee | automatic
    );
    console.log("Transfer result:", result);

}

(async () => {
    await transfer();
    process.exit(0)
})().catch(e => {
    console.error(e);
    process.exit(1);
});