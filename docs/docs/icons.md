---
title: Icons
sidebar_position: 2
---

import IconsTable from '@site/src/components/IconsTable';

# Icons

nudge-design/icons is a node package containing all of our icons which uses svgr to convert the svgs into React components.

## React

```
yarn install @nudge-coach/icons@latest --save
```

## React-Native

Install the library

```
yarn install @nudge-coach/native-icons
```

Import the icon you want to use. See the complete list of icons below for reference.

```jsx
import { Users } from "@nudge-coach/native-icons";
```

Customize the size and color of the icon like this:

```jsx
<Users width={64} height={64} color={"pink"} />
```

## Reference Sheet

<IconsTable />
