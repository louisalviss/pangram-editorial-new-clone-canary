import fs from 'node:fs';

const base = fs.readFileSync('styles.css','utf8');
const layers = ['structure.css','typography.css','media.css','visual-tuning.css'];
const required = [
  ['page-header',144], ['cover-section',960], ['styles-section',751], ['gallery-one',849],
  ['sampler-section',1305], ['gallery-two',686], ['variable-section',533], ['glyph-section',3347],
  ['microsite-section',485], ['gallery-three',823], ['features-section',489], ['gallery-four',656],
  ['info-section',751], ['buy-section',889], ['inuse-section',578], ['pairings-section',442]
];
for (const [cls,h] of required) {
  const re = new RegExp(`\\.${cls}\\{[^}]*\\bheight\\s*:\s*${h}px\\b`, 's');
  if (!re.test(base)) throw new Error(`baseline geometry token missing: ${cls}=${h}px`);
}
const index = fs.readFileSync('index.html','utf8');
for (const file of layers) if (!index.includes(`href="${file}"`)) throw new Error(`missing layer link: ${file}`);
const sectionRoots = '(page-header|cover-section|styles-section|gallery-one|sampler-section|gallery-two|variable-section|glyph-section|microsite-section|gallery-three|features-section|gallery-four|info-section|buy-section|inuse-section|pairings-section)';
for (const file of layers) {
  const css = fs.readFileSync(file,'utf8');
  const lines = css.split(/\r?\n/).length;
  if (lines > 90) throw new Error(`${file}: too many lines (${lines} > 90)`);
  if (/@import\b|https?:\/\/|@font-face\b/i.test(css)) throw new Error(`${file}: external resource forbidden`);
  const blocks = [...css.matchAll(new RegExp(`\\.${sectionRoots}[^,{]*\\{([^}]*)\\}`, 'gs'))];
  for (const m of blocks) {
    if (/\b(?:height|min-height|max-height|margin-top)\s*:/i.test(m[2])) throw new Error(`${file}: section geometry override forbidden for ${m[1]}`);
  }
}
console.log(JSON.stringify({ok:true,layers,geometry_tokens:required.length}));
