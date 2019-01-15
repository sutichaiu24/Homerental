pragma solidity ^0.4.17;

contract HomeRental {
    string public rentcontract;

    function HomeRental(string initialcontract)public {
        rentcontract = initialcontract;
    }
    function setMessage(string newMessage)public {
        rentcontract = newMessage;
    }
}
