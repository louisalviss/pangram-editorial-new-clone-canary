const glyphs='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,!*#/()-\"\'$+%&:;?=><?@[]_^'.split('');
const grid=document.querySelector('.glyph-grid');glyphs.forEach(g=>{const s=document.createElement('span');s.textContent=g;grid.appendChild(s)});
const w=document.querySelector('#weight'),v=document.querySelector('#weightVal');w.addEventListener('input',()=>{v.textContent=w.value;document.querySelector('.variable').style.fontVariationSettings=`"wght" ${w.value}`});
