# htmlspecialchars.js

_A utility function for typing html special characters_

[![NPM Version](https://img.shields.io/npm/v/@enzoaicardi/htmlspecialchars.svg?style=for-the-badge)](https://www.npmjs.com/package/@enzoaicardi/htmlspecialchars)
[![NPM Downloads](https://img.shields.io/npm/dm/@enzoaicardi/htmlspecialchars.svg?style=for-the-badge)](https://www.npmjs.com/package/@enzoaicardi/htmlspecialchars)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@enzoaicardi/htmlspecialchars?style=for-the-badge)](https://www.npmjs.com/package/@enzoaicardi/htmlspecialchars)
[![JSDelivr Hits](https://img.shields.io/jsdelivr/npm/hm/@enzoaicardi/htmlspecialchars?style=for-the-badge)](https://www.jsdelivr.com/package/npm/@enzoaicardi/htmlspecialchars)
[![Wiki](https://img.shields.io/badge/Wiki-Documentation-blue?style=for-the-badge)](https://github.com/enzoaicardi/htmlspecialchars/tree/main/wiki/README.md)

## List of all exports

-   [x] htmlSpecialChars

## Usage

**htmlSpecialChars** can be useful when you need to securely insert html as text, this same function can also be used for html attribute values.

Only the following characters are escaped: `&<>"'` and backticks. If you want to escape all html entities, choose a package such as [html-entities](https://github.com/mdevils/html-entities).

It is exactly the same as [`Bun.escapeHTML(...)`](https://bun.com/docs/guides/util/escape-html).

```js
const unsafeHtmlString = `<img onload="alert('XSS')" />`;
const sanitizedHtmlString = htmlSpecialChars(unsafeHtmlString);

console.log(sanitizedHtmlString);
// &lt;img onload=&quot;alert(&#039;XSS&#039;)&quot; /&gt;
```

## Installations

The htmlspecialchars package is available as **ESModule / IIFE / Commonjs**.

### NPM Package

```bash
npm install @enzoaicardi/htmlspecialchars
```

```js
import { htmlSpecialChars } from "@enzoaicardi/htmlspecialchars"; // es modules
const { htmlSpecialChars } = require("@enzoaicardi/htmlspecialchars"); // commonjs modules
```

### CDN import

```js
// es modules
import { htmlSpecialChars } from "https://cdn.jsdelivr.net/npm/@enzoaicardi/htmlspecialchars@latest/esm/htmlspecialchars.js";
```

```html
<!-- iife function execution -->
<script src="https://cdn.jsdelivr.net/npm/@enzoaicardi/htmlspecialchars@latest/iife/htmlspecialchars.js"></script>
<script>
    // global object destructuration
    const { htmlSpecialChars } = htmlSpecialChars;
</script>
```
