// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NameStorage {
    // Mapping to store names for each address
    mapping(address => string) private names;

    // Function to set a user's name
    function setName(string memory _name) public {
        // Store the name for the caller's address
        names[msg.sender] = _name;
    }

    // Function to get the name of the caller
    function getName() public view returns (string memory) {
        // Return the name associated with the caller's address
        return names[msg.sender];
    }
}
