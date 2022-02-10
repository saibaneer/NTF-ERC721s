/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers')

const INFURA_KEY = "3c2e6fcec30a4270b7b2f2d5b23a63bb";

const RINKEBY_KEY =
  "1630c735bbaa1ed4cca0c26a05757341bddfd302ce4598081c1604bd4838b29e";

module.exports = {
  solidity: "0.8.1",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
      accounts: [`${RINKEBY_KEY}`],
    },
  },
};
