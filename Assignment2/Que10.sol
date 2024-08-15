// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MessageStore {
    // Stores messages for each address
    mapping(address => string) private messages;

    // Save a message for the caller
    function storeMessage(string memory _message) public {
        messages[msg.sender] = _message;  // Save message
    }

    // Get the stored message for the caller
    function getMessage() public view returns (string memory) {
        return messages[msg.sender];  // Return message
    }
}
