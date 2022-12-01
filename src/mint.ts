import { MintArgs } from "xp.network";
import { setup } from "./config";

/**
 * Minting NFTs example on Caduceus
 */
 export const mintOnMoonbeam = async  (uri:string) => {

    console.log("Minting NFTs on Caduceus...");
    

    const {
        factory,
        causeus,
        signer,
        UMT
    } = await setup();

    const nftResult = await factory.mint(
        // On which chain to mint
        causeus,
        // The signer object
        signer,
        {
            // The NFT contract to mint in
            contract: UMT,
            // The link to the metadata
            uri
        } as MintArgs
    );
    
    console.log(`Minted ${uri}`, nftResult);
}

(async () => {
    await mintOnMoonbeam("https://meta.polkamon.com/meta?id=10001419693");
    process.exit(0)
})().catch(e => {
    console.error(e);
    process.exit(1);
});