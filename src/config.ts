import {
    ChainFactoryConfigs, 
    ChainFactory,
    AppConfigs,
    Chain,
    AppConfig,
    ChainParams
} from "xp.network";
import {exit} from 'process';
import { config } from 'dotenv';
config();

// EVM chains compatible wallet:
import { Wallet } from "ethers";

const {
    SK, // Owner's private key
    UMT // UserNftMinter smart contract address
} = process.env;

export enum Network {
    mainnet = "mainnet",
    staging = "staging",
    testnet = "testnet"
}

/**
 * Prepares the boilerplate for the rest of the functions
 * @param network optional parameter "mainnet" | "staging" | "testnet" (default)
 * @returns : { causeus, factory,  goerly, signer }
 */
export const setup = async (network?:Network) => {

    let net: AppConfig;
    let chainParams:Partial<ChainParams>;

    if(network == Network.mainnet){
        net = AppConfigs.MainNet();
        chainParams = await ChainFactoryConfigs.MainNet();
    } else if(network == Network.staging){
        net = AppConfigs.Staging();
        chainParams = await ChainFactoryConfigs.Staging();
    } else{
        net = AppConfigs.TestNet();
        chainParams = await ChainFactoryConfigs.TestNet();
    }

    // Accommonized factory for interacting with various chain protocols
    const factory: ChainFactory = ChainFactory(net, chainParams);

    // Initialize chain handlers
    const causeus = await factory.inner(Chain.CADUCEUS);
    const goerly = await factory.inner(Chain.ETHEREUM);

    

    // Create a signer for the NFT Owner
    const signer = new Wallet(SK!, causeus.getProvider());

    const goerlySigner = new Wallet(SK!, goerly.getProvider());

    const UMT = chainParams.caduceusParams?.erc721Minter;

    return {
        causeus,
        factory,
        goerly,
        goerlySigner,
        signer,
        UMT
    }

}

/* Testing the above */
// (async () => {

//     const {
//         causeus,
//         factory,
//         goerly,
//         signer
//     } = await setup();

//     console.log("causeus", causeus);
//     console.log("factory", factory);
//     console.log("goerly", goerly);
//     console.log("signer", signer);
//     exit(0);
// })().catch(e => {
//     console.error(e);
//     exit(1)
// });