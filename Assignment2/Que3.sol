// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GreetingStorage {
    // Mapping to store each user's greeting message
    mapping(address => string) private greetings;

    // Function to set a personalized greeting message
    function setGreeting(string memory _greeting) public {
        // Save the greeting message for the caller's address
        greetings[msg.sender] = _greeting;
    }

    // Function to get the personalized greeting message
    function getGreeting() public view returns (string memory) {
        // Return the greeting message for the caller's address
        return greetings[msg.sender];
    }
}
