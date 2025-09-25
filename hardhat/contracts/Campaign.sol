//SPDX-License-Identifier: Unlicensed

pragma solidity >0.7.0 <=0.9.0;

contract CampaignFactory{

    address[] public deployedCampaings;

    event CamapaignCreated(
        string title,
        uint requiredAmount,
        address indexed owner,
        address campaignAddress,
        string imgUIR,
        uint indexed timestamp,
        string indexed category

    );
    
    function createCampaign(
    string memory campaignTitle,
    uint requiredCampaignAmount,
    string memory imgURI,
    string memory category,
    string memory storyURI) public
    {
        Campaign newCampaign=new Campaign(
            campaignTitle,requiredCampaignAmount,imgURI,storyURI);

            deployedCampaings.push(address(newCampaign));

            emit CamapaignCreated(
                campaignTitle,
                requiredCampaignAmount,
                msg.sender,
                address(newCampaign),
                imgURI,
                block.timestamp,
                category

                );


    }
}




contract Campaign{
    string public title;
    uint public requiredAmount;
    string public image;
    string public story;
    address payable public owner;
    uint public receivedAmount;


    event donated(address indexed donar,uint indexed amount,uint indexed timestamp);


    constructor(
    string memory campaignTitle,
    uint requiredCampaignAmount,
    string memory imgURI,
    string memory storyUIR
    ){
    title=campaignTitle;
    requiredAmount=requiredCampaignAmount;
    image=imgURI;
    story=storyUIR;
    owner=payable(msg.sender);

    }

    function donate()public payable{
        require(requiredAmount>receivedAmount,"required amount fullfilled");
        owner.transfer(msg.value);
        receivedAmount+=msg.value;
        emit donated(msg.sender,msg.value,block.timestamp);

    }



}