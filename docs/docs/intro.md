---
title: Intro
sidebar_position: 1
---

# Nudge Design System

Nudge's design system to help us design with continuity and build with efficiency.

Checkout the [Documentation Site](https://nudgeyourself.github.io/nudge-design/) for more details.

---

### UI

nudge-design/ui is a public node package of all the components of the Nudge design system for web.

```
yarn install @nudge-coach/ui
```

### Tokens

nudge-design/tokens is a node package which contains all the tokens. It creates a single source of truth and record of all design decisions while utilitizing [Style Dictionary](https://amzn.github.io/style-dictionary/#/) to export references to these tokens in formats for various platforms.

```
yarn install @nudge-coach/nudge-tokens
```

### Icons

nudge-design/icons is a node package containing all of our icons which uses svgr to convert the svgs into React components.

```
yarn install @nudge-coach/icons
```

### Docs

Documention for this system is written in markdown files and converted into a static website by [docusaurus](https://docusaurus.io). The [documentation site](https://nudgeyourself.github.io/nudge-design/) which is currently hosted on Github Pages is automatically updated any time a commit to master is pushed that contains an update to the markdown files.
