import BigNumber from 'bignumber.js';
import {setup} from './config';
import {listNfts} from './list';

/**
 * Example of calling Approve on Caduceus
 */
export const approve = async () => {

    const {
        causeus,
        signer
    } = await setup();

    const owner:string = signer.address;
    const NFTs = await listNfts(owner);
    const selected = NFTs[0];
    console.log('Selected:', selected);
    

    console.log(`Approving NFTs for Caduceus...`);
    const approved = await causeus.approveForMinter(selected, signer, new BigNumber(0));
    console.log(`Approved: ${approved}`);
}

/* Testing the above */
(async () => {
    await approve();
    
    process.exit(0);
})().catch(e => {
    console.error(e);
    process.exit(1);
});