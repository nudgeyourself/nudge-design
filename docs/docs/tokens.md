---
title: Tokens
sidebar_position: 1
---

import TokenTable from '@site/src/components/TokenTable';

# Tokens

## Prefixes

### Component

Design decisions used across multiple components. When developing and looking for applicable tokens always start here.

<TokenTable category="component" />

### Semantic

Design decisions attached to a particular meaning or use case.

<TokenTable category="semantic" />

### Core

Raw values that are used by the system. Not all core tokens may be in use. These tokens represent all potential values that are compliant with the system. Avoid referencing core tokens directly whenever possible.

<TokenTable category="core" />

### Theme

Tokens that can be customized for white-labels.

<TokenTable category="theme" />

---

## Usage

### Javascript

First, import the **web**, **ios**, or **android** tokens for your respective platform.

```jsx
import { ios } from "@nudge-coach/tokens";
```

Then you can apply the token like so:

```jsx
<Component width={web.semantic.spacing.medium.value} />
```

:::caution
Don't forget to reference the actual token value.
:::

### CSS

This package also contains a reference to every token via a CSS variable. References to our CSS variables always being with **--**

```css
.myComponent {
  backgroundcolor: var(--semantic-background-success);
}
```
