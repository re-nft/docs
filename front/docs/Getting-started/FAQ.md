---
sidebar_position: 5
---


# Frequently Asked Questions (FAQ)

## We want a custom solution, is that possible?
You might have a specific feature that you’d like to see in reNFT. We completely understand that and we’re more than happy to tailor the protocol to your needs. 
As of now, the reNFT team decides what features are prioritized. This prioritization is based on the transaction volume of the project that requests the feature and the number of times this feature has been requested. In the future, the DAO will decide what features will be prioritized.

## Can users pay in the native token of a project?

Yes. When reNFT is integrated into your project, users can pay with your native token.

## Why shouldn’t we build a rental solution ourselves?

Great question! First of all, building a rental solution is way more complex and time-consuming than you might think. Since it’s hard enough already to find a talented team to build a successful project, we believe you should spend their time on your core business, not rental infrastructure.

Secondly, since our core business is rental infrastructure, we optimize the protocol way faster than you would be able to.

Another big reason is our partnerships. We will partner with projects that enable fractionalization or provide loans with NFTs as collateral. This means that you can lend your NFT and receive a collateralized loan at the same time.

We also have partnerships with the biggest gaming guilds. We closely work together with them to tailor our protocol to their needs, therefore guilds will prefer games to work with reNFT in the future.


## **What if I want to send an airdrop to the renter?**

In this case, the project has to look at the API to see who the renter is and airdrop it to that wallet address, instead of the actual NFT holder.

## If the smart contract gets hacked, who is responsible?

We extensively test our contracts and let them be audited by renowned parties before launching them. Although we do everything to make our smart contracts as safe as possible, we can’t guarantee that they can’t be hacked. If one of the reNFT smart contracts would get hacked, the owner of the NFT is responsible for a potential loss.

The reNFT team at no point has access to any asset.

Our V1 contracts are not formally audited, but they were reviewed by several developers. You can find the contract here: [https://etherscan.io/address/0xa8d3f65b6e2922fed1430b77ac2b557e1fa8da4a](https://etherscan.io/address/0xa8d3f65b6e2922fed1430b77ac2b557e1fa8da4a)

Our V2 contracts, which will be released soon, will be formally audited.

## Can my NFT be automatically put up for rent again after the rental period has ended?

Yes, in the collateral-free solution, this is by default the case. Your NFT stays available for rent until you withdraw the NFT from the smart contract. In the collateralized solution, the NFT has to be returned by the renter first.

## What happens if an NFT is returned before the rental period has ended?

When an NFT is returned before the rental period has ended, the smart contract refunds the renter for the unused time. 

For example, you rent an NFT for 1 day and you return the NFT after 12 hours. The smart contract will refund you for the remaining 12 hours.

## What token standards do you support?

We currently support ERC-721, ERC-1155 and blended assets. The Sandbox is an example of a collection that has blended assets.
