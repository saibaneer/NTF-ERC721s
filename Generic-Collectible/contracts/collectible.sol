pragma solidity ^0.8.1;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

contract Collectible is ERC721 {
    // using Counters for Counters.Counter;
    // Counters.Counter private _tokenIds;
    constructor(string memory name, string memory symbol) ERC721(name, symbol) public {
    }

    // function awardCollectible(address player, string memory tokenURI) public returns (uint256) {
    //     _tokenIds.increment();

    //     uint256 newItemId = _tokenIds.current();
    //     _mint(player, newItemId);
    //     _setTokenURI(newItemId, tokenURI);

    //     return newItemId;
    // }

}