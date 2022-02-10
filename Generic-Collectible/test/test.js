const { expect } = require('chai');
const { ethers } = require('ethers');

describe('MyCryptoCollectible', function(){
    it("should return name and symbol", async function(){
        const Collectible = await hre.ethers.getContractFactory('Collectible');
        const collectibleInstance = await Collectible.deploy("Party Lhasas", 'PLL');

        await collectibleInstance.deployed();

        //assertion checks
        expect(await collectibleInstance.name()).to.equal('Party Lhasas');
        expect(await collectibleInstance.symbol()).to.equal('PLL');
    })
})