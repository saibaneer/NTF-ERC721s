const { expect } = require('chai')
//const { ethers } = require('ethers')



describe('Testing Zodiac Contract', function(){

let zodiacInstance;
let deployer;
let owner;


    this.beforeEach(async function(){
        [owner] = await hre.ethers.getSigners();
        deployer = owner.address;
        const Zodiac = await hre.ethers.getContractFactory('Zodiac');
        zodiacInstance = await Zodiac.deploy("Zodiac Beasts", 'ZDB');
        await zodiacInstance.deployed();
    })

    it("should test that both name and symbol were added correctly", async function(){
        expect(await zodiacInstance.symbol()).to.equal('ZDB');
        expect(await zodiacInstance.name()).to.equal("Zodiac Beasts");
    })

    it("should test that NFT is minted successfully", async function(){
        //before minting
        expect(await zodiacInstance.balanceOf(deployer)).to.equal(0);
        const tokenURI = 'https://gateway.pinata.cloud/ipfs/QmSYB4aGoZu6Lh3MtTbE7AzrYPizeutUsWbhQsAec3weCN?preview=1';
        
        //minting
        await zodiacInstance.connect(owner).mint(tokenURI)

        //after minting
        expect(await zodiacInstance.balanceOf(deployer)).to.equal(1);
    })

    it("should test that token URI is set successfully", async function () {
      //before minting
      
      const tokenURI =
        "https://gateway.pinata.cloud/ipfs/QmSYB4aGoZu6Lh3MtTbE7AzrYPizeutUsWbhQsAec3weCN?preview=1";

      //minting
      await zodiacInstance.connect(owner).mint(tokenURI);

      //after minting
      expect(await zodiacInstance.getTokenURI(0)).to.equal(tokenURI);
    });
})