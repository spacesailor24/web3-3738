pragma solidity ^0.5.0;

contract Logger {
    event LogRequest(bytes32 indexed requester, bytes source, bytes target, bytes command, uint256 requestedTime); // this works fine
    event LogResponse(bytes32 indexed requester, bytes source, bytes target, bytes command, bytes result); // this produces the error

    function request(bytes32 requester, bytes memory source, bytes memory target, bytes memory command, uint256 requestedTime) public {
        emit LogRequest(requester, source, target, command, requestedTime);
    }

    function response(bytes32 requester, bytes memory source, bytes memory target, bytes memory command, bytes memory result) public {
        emit LogResponse(requester, source, target, command, result);
    }
}