import {setup} from './config'

/**
 * Listing Moonbase NFTs Example
 * @returns an array of NFT JSON objects
 */
 export const listNfts = async (owner:string) => {

    console.log(`Listing NFTs for Caduceus:`);

    const {
        factory,
        causeus
    } = await setup();

    const NFTs = await factory.nftList(
        causeus,
        owner
    );
    console.log(`On Caduceus Found NFTs:`, NFTs.length);
    return NFTs;
}

/* Testing the above */
// (async () => {

//     const {signer} = await setup();

//     const NFTs = await listNfts(
//         signer.address
//     );
//     console.log(NFTs);
    
//     process.exit(0);
// })().catch(e => {
//     console.error(e);
//     process.exit(1);
// });