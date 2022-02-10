pragma solidity ^0.8.1; 

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import 'hardhat/console.sol';

contract Zodiac is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    mapping(uint256 => string) private _tokenURIs;

    

    constructor(string memory name, string memory symbol) ERC721(name, symbol){

    }

    function mint(string memory _tokenURI) public {
        console.log('Starting count is : ', _tokenIds.current());
        uint256 tokenCounter = _tokenIds.current();
        _safeMint(msg.sender, tokenCounter);
        _setTokenURI(tokenCounter, _tokenURI);

        _tokenIds.increment();
    }

    function _setTokenURI(uint256 _tokenId, string memory _tokenURI) internal virtual {
        require(_exists(_tokenId), 'ERC721Metadata: URI set of nonexistent token');
        _tokenURIs[_tokenId] = _tokenURI;
    }

    function getTokenURI(uint256 _tokenId) public view virtual returns(string memory){
        require(_exists(_tokenId),"ERC721Metadata: URI set of nonexistent token");
        return _tokenURIs[_tokenId];
    }



}