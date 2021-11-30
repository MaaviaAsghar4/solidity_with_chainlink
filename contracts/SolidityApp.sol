// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.10;

contract SolidityApp {
    address payable public ownerOfContract;

    event transactionSuccessful(string message);

    constructor() {
        ownerOfContract = payable(msg.sender);
    }

    function buyShoe(uint amount) external payable {
        require(msg.value > 0, "Amount must be greater than zero");
        require(amount == msg.value, "Amount does not match with the price");
        ownerOfContract.transfer(msg.value);
        emit transactionSuccessful("transaction successful");
    }
}