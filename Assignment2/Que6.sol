// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    // Structure to store candidate details
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    // Mapping from candidate ID to Candidate details
    mapping(uint256 => Candidate) public candidates;

    // Mapping to track if an address has voted
    mapping(address => bool) public hasVoted;

    // Total number of candidates
    uint256 public candidatesCount;

    // Event for when a vote is cast
    event VoteCast(uint256 candidateId);

    // Function to add a new candidate
    function addCandidate(string memory _name) public {
        candidatesCount++;  // Increase candidate count
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);  // Add new candidate
    }

    // Function to vote for a candidate
    function vote(uint256 _candidateId) public {
        // Ensure the user hasn't voted before
        require(!hasVoted[msg.sender], "You have already voted.");
        
        // Check if the candidate ID is valid
        require(_candidateId > 0 && _candidateId <= candidatesCount, "Invalid candidate ID.");

        // Mark the user as having voted
        hasVoted[msg.sender] = true;

        // Increase the vote count for the candidate
        candidates[_candidateId].voteCount++;

        // Trigger the vote cast event
        emit VoteCast(_candidateId);
    }

    // Function to get details of a candidate
    function getCandidate(uint256 _candidateId) public view returns (string memory name, uint256 voteCount) {
        // Ensure the candidate ID is valid
        require(_candidateId > 0 && _candidateId <= candidatesCount, "Invalid candidate ID.");
        
        Candidate memory candidate = candidates[_candidateId];
        return (candidate.name, candidate.voteCount);
    }
}
