// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

contract DocumentHashStorage {
  mapping(string => string) private documentHashes;

  function storeDocumentHash(string memory uId, string memory documentHash) external {
    require(bytes(uId).length > 0, "Transaction code must not be empty");
    require(bytes(documentHash).length > 0, "Document hash must not be empty");
    documentHashes[uId] = documentHash;
  }
  
  function getDocumentHash(string memory uId) external view returns (string memory) {
    return documentHashes[uId];
  }
}