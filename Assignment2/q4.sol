// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    // This variable stores the current count
    uint256 private count;

    // Function to get the current count
    function getCount() public view returns (uint256) {
        return count;
    }

    // Function to increment the count by 1
    function increment() public {
        count += 1;
    }
}
