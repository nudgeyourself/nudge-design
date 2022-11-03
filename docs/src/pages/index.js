import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import tokens from "../../../tokens/build/web/variables.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero ", styles.heroBanner)}>
      <div className="container">
        <h1>{siteConfig.title}</h1>
        <p>{siteConfig.tagline}</p>
        <div style={{ marginBottom: "var(--semantic-spacing-large)" }}>
          <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
              const Button = require("@nudge-coach/ui").Button;
              return (
                <Button
                  primary
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
        <section class="row padding--lg" style={{ justifyContent: "center" }}>
          <a
            class="card padding--lg cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
            href={`${siteConfig.baseUrl}docs/category/components`}
          >
            <h2>Components</h2>
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
