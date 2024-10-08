// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    // Variable to store the number
    uint256 private storedNumber;

    // Function to set the number
    function set(uint256 _number) public {
        storedNumber = _number;
    }

    // Function to get the number
    function get() public view returns (uint256) {
        return storedNumber;
    }
}
