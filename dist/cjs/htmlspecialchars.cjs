"use strict";const t=/[&<>"'`]/g,s={t:"&amp;",o:"&lt;",p:"&gt;",u:"&quot;",i:"&#039;",l:"&#96;"},o=t=>s[t];exports.htmlSpecialChars=s=>s.replace(t,o);
