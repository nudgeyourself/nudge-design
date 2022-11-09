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
