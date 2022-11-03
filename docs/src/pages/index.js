import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrowserOnly from "@docusaurus/BrowserOnly";

import Layout from "@theme/Layout";
import { Button } from "@nudge-coach/ui";
import styles from "./index.module.css";
import tokens from "../../../tokens/build/web/variables.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero ", styles.heroBanner)}>
      <div className="container">
        <h1>{siteConfig.title}</h1>
        <p>{siteConfig.tagline}</p>
        <div>
          <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
              const Button = require("@nudge-coach/ui").Button;
              return (
                <Button
                  onClick={() => {
                    location.href = `${siteConfig.baseUrl}docs/intro`;
                  }}
                >
                  Introduction
                </Button>
              );
            }}
          </BrowserOnly>
        </div>
        <hr />
        <section class="row">
          <a
            class="card padding--lg cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
            href={`${siteConfig.baseUrl}docs/category/components`}
          >
            <h2
              class="text--truncate cardTitle_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
              title="Badge"
            >
              Components
            </h2>
            <p
              class="text--truncate cardDescription_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
              title="Highlight notable updates."
            >
              Highlight notable updates.
            </p>
          </a>
        </section>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main></main>
    </Layout>
  );
}
