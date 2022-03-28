---
sidebar_position: 1
---

# Intro

Let's discover **reNFT in less than 5 minutes**.

## Getting Started

Get started by checking out our V1 dApp [reNFT V1](https://dapp.renft.io/).

### Rental Explanation

The lender can start lending by setting a `dailyRentPrice` for the NFT and a `maxRentDuration`.
The renter would need to specify a `rentDuration` lesser than or equal to the `maxRentDuration` set by the lender and pay the whole price up front for renting (`dailyRentPrice` * `rentDuration`).

### Collateralized Rental

Our collateralized solution has the concept of [collateral](https://www.investopedia.com/terms/c/collateral.asp). If the renter does not return the NFT, the renter when paying the `dailyRentPrice` * `rentDuration` will also pay `collateral`, which should be set to what the NFT is worth. If the renter does not return your NFT, you will keep the collateral amount. This scenario is also known as defaulted.

### Collateral-Free Rental


Our collateral-free solution is the same as our collateral solution, but without collateral.
The way we enable this is by holding the NFT in our [registry](https://github.com/re-nft/registry) smart contract instead of giving it directly to the renter for the rental duration.
The app that wants to make use of collateral-free renting must check our registry contract to see if someone is renting.
This solution requires  direct integration with the app supporting collateral-free rentals.
Games and events can take advantage of this to enable rentals on their platforms without users risking their NFTs getting defaulted.
If you're looking to integrate collateral-free rentals, check our [integration guide](./Developers/collateral-free).
