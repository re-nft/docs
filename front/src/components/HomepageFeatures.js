import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Purrrfect for Games",
    Svg: require("../../static/img/cat.svg").default,
    description: (
      <>
        Check our docs to integrate our collateral-free solution to enable
        rentals in-game or for NFT gated events.
      </>
    ),
  },
  {
    title: "Gas-Efficient",
    Svg: require("../../static/img/dragon.svg").default,
    description: (
      <>
        Don't light your funds on fire with NFT wrapper solutions. Try our
        gas-efficient collateralized and collateral-free registry rental
        protocols.
      </>
    ),
  },
  {
    title: "Chain-Agnostic",
    Svg: require("../../static/img/trees.svg").default,
    description: (
      <>
        Lend and rent NFTs on Ethereum with collateral or collateral-free.
        Polygon and Solana support coming soon.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
