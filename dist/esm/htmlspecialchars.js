const t=/[&<>"'`]/g,o={t:"&amp;",o:"&lt;",p:"&gt;",l:"&quot;",m:"&#039;",q:"&#96;"},g=t=>o[t],p=o=>o.replace(t,g);export{p as htmlSpecialChars};
