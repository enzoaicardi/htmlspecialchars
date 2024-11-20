import { test, expect } from "bun:test";
import { htmlSpecialChars as escape } from "../src/@enzoaicardi/htmlspecialchars";

test("htmlspecialchars: escape html", () => {
    const result = escape(`<img onload="alert('XSS')" />`);
    expect(result).toBe(
        `&lt;img onload=&quot;alert(&#039;XSS&#039;)&quot; /&gt;`
    );
});

test("htmlspecialchars: escape attribute", () => {
    const result = `<img alt="${escape(`" onload="alert('XSS')"`)}" />`;
    expect(result).toBe(
        `<img alt="&quot; onload=&quot;alert(&#039;XSS&#039;)&quot;" />`
    );
});
