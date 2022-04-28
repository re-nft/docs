# Collateral-Free Integration Guide

![Collateral-Free Overview](../..//static/img/developers/21130_Collat-Free_InfoGraphic.png)

## Lend/Rent NFTs In-App

In order to interact with our smart contract, we'd recommend using our [SDK](https://github.com/re-nft/sdk/tree/registry).

The ReNFT object takes in an ethers [Signer](https://docs.ethers.io/v5/api/signer/#Signer) and an optional contract address if not using the default collateral-free contract.

```typescript
import { ReNFT } from "@renft/sdk";
const renft = new ReNFT(signer);
```

### Batching

Any of the following functions support batching as shown below for the Lend instruction where the user lends an AstroCat and a CatPlsr in the same function call:


```typescript
import { BigNumber } from "ethers";
import { NFTStandard, PaymentToken, packPrice } from "@renft/sdk";

const astroCatLendingArgs = [
  NFTStandard.E1155,
  "0x0db8c099b426677f575d512874d45a767e9acc3c",
  BigNumber.from(1),
  1,
  1,
  packPrice(Number(1).toString()),
  PaymentToken.WETH,
];
const catPlsrLendingArgs = [
  NFTStandard.E1155,
  "0x0db8c099b426677f575d512874d45a767e9acc3c",
  BigNumber.from(2),
  1,
  1,
  packPrice(Number(0.5).toString()),
  PaymentToken.WETH,
];

const lendingArgs = astroCatLendingArgs.map((value, index) => {
  return [value, catPlsrLendingArgs[index]];
});

await renft.lend(...lendingArgs);
```


### Lend

```typescript
import { BigNumber } from "ethers";
import { NFTStandard, PaymentToken, packPrice } from "@renft/sdk";

const nftStandard = NFTStandard.E1155;
const nftAddress = "0x0db8c099b426677f575d512874d45a767e9acc3c";
const tokenID = BigNumber.from(1);
const lendAmount = 1;
const maxRentDuration = 1; // in days
const dailyRentPrice = packPrice(Number(1).toString());
const paymentToken = PaymentToken.WETH;

await renft.lend(
  [nftStandard],
  [nftAddress],
  [tokenID],
  [lendAmount],
  [maxRentDuration],
  [dailyRentPrice],
  [paymentToken]
);
```

### Rent

```typescript
import { BigNumber } from "ethers";
import { NFTStandard } from "@renft/sdk";

const nftStandard = NFTStandard.E1155;
const nftAddress = "0x0db8c099b426677f575d512874d45a767e9acc3c";
const tokenID = BigNumber.from(1);
const lendingID = BigNumber.from(1);
const rentDuration = 1; // in days
const rentAmount = 1;

await renft.rent(
  [nftStandard],
  [nftAddress],
  [tokenID],
  [lendingID],
  [rentDuration],
  [rentAmount]
);
```

### Stop Rent

```typescript
import { BigNumber } from "ethers";
import { NFTStandard } from "@renft/sdk";

const nftStandard = NFTStandard.E1155;
const nftAddress = "0x0db8c099b426677f575d512874d45a767e9acc3c";
const tokenID = BigNumber.from(1);
const lendingID = BigNumber.from(1);
const rentingID = BigNumber.from(1);

await renft.stopRent(
  [nftStandard],
  [nftAddress],
  [tokenID],
  [lendingID],
  [rentingID],
);
```

### Claim Rent

```typescript
import { BigNumber } from "ethers";
import { NFTStandard } from "@renft/sdk";

const nftStandard = NFTStandard.E1155;
const nftAddress = "0x0db8c099b426677f575d512874d45a767e9acc3c";
const tokenID = BigNumber.from(1);
const lendingID = BigNumber.from(1);
const rentingID = BigNumber.from(1);

await renft.claimRent(
  [nftStandard],
  [nftAddress],
  [tokenID],
  [lendingID],
  [rentingID],
);
```

### Stop Lend

```typescript
import { BigNumber } from "ethers";
import { NFTStandard } from "@renft/sdk";

const nftStandard = NFTStandard.E1155;
const nftAddress = "0x0db8c099b426677f575d512874d45a767e9acc3c";
const tokenID = BigNumber.from(1);
const lendingID = BigNumber.from(1);

await renft.stopLend(
  [nftStandard],
  [nftAddress],
  [tokenID],
  [lendingID],
);
```


## Query Loan/Rental Status

Our current indexing solution is provided by [The Graph](https://thegraph.com/en/).
Feel free to experiment with our subraph ([renft-registy](https://thegraph.com/explorer/subgraph?id=DkTqTw7xhNi8BsDsJU341RhCQ1aRuGT5uWPAi5FqjHYk&view=Overview)) in the Playground tab.

To query our subgraph, send an HTTP POST request to `https://api.studio.thegraph.com/query/3020/renft-registry/1.0.1` whose body is a GraphQL query.

Here are some example queries:


Get 5 lendings after skipping 5 where the NFT's address is: `0x0db8c099b426677f575d512874d45a767e9acc3c` sorted by `dailyRentPrice` in descending order.

```graphql
{
    lendings(where: {nftAddress: "0x0db8c099b426677f575d512874d45a767e9acc3c"}, orderDirection: desc, orderBy: dailyRentPrice, first: 5, skip: 5) {
                id,
                lenderAddress,
                maxRentDuration,
                dailyRentPrice,
                paymentToken,
                lendAmount,
                nftAddress,
                tokenID,
                is721,
                lentAt
        }
}
```

Get a lending by id.

```graphql
{
    lending(id: "1") {
                id,
                lenderAddress,
                maxRentDuration,
                dailyRentPrice,
                paymentToken,
                lendAmount,
                nftAddress,
                tokenID,
                is721,
                lentAt
        }
}
```

Get rentings for renter `0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41` ordered by `rentDuration` in ascending order

```graphql
{
    rentings(where: {renterAddress: "0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41", expired: false}, orderDirection: asc, orderBy: rentDuration) {
             id,
             renterAddress,
             rentDuration,
             rentedAt,
             rentAmount,
             lending {
               id,
               tokenID,
               nftAddress,
               dailyRentPrice,
               paymentToken,
               lenderAddress
             },
        }
}
```

### Unpacking Data

Prices are returned in a custom format. To unpack them, use our [SDK](https://github.com/re-nft/sdk/tree/registry)'s `unpackPrice` function:

```typescript
import { BigNumber } from "ethers";
import { PaymentToken, unpackPrice } from "@renft/sdk";

const parsePaymentToken = (tkn: string): PaymentToken => {
  switch (tkn) {
    case "0":
      return PaymentToken.SENTINEL;
    case "1":
      return PaymentToken.WETH;
    case "2":
      return PaymentToken.DAI;
    case "3":
      return PaymentToken.USDC;
    case "4":
      return PaymentToken.USDT;
    case "5":
      return PaymentToken.TUSD;
    default:
      return PaymentToken.DAI;
  }
};

const lendingsDataToLendings = (
  theGraphLendings: TheGraphLending[]
): Lending[] => {
  const theGraphToLending = (theGraphLending: TheGraphLending): Lending => {
    return {
      lendingID: BigNumber.from(theGraphLending.id),
      lenderAddress: theGraphLending.lenderAddress,
      dailyRentPrice: unpackPrice(theGraphLending.dailyRentPrice),
      maxRentDuration: Number(theGraphLending.maxRentDuration),
      lendAmount: Number(theGraphLending.lendAmount),
      paymentToken: parsePaymentToken(theGraphLending.paymentToken),
      lentAt: Number(theGraphLending.lentAt),
    };
  };

  return theGraphLendings.map(theGraphToLending);
};
```
