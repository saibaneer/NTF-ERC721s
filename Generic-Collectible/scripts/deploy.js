const { ethers } = require("ethers");

async function deploy(){

    [owner] = await hre.ethers.getSigners()
    const deployer = owner.address;
    console.log(`Deploying collectible with owner's address: ${deployer}`)

    //get contract object
    const Collectible = await hre.ethers.getContractFactory('Collectible');
    const collectibleInstance = await Collectible.deploy('Party Lhasas', 'PLL');
    await collectibleInstance.deployed();

    console.log('Collectible contract deployed to: ', collectibleInstance.address);

}

deploy()
    .then(()=> process.exit(0))
    .catch((error)=>{
        console.error(error);
        process.exit(1);
    })