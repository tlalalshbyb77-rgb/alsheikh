import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, normalize, relative, resolve } from 'node:path';

const siteRoot = resolve(process.argv[2] || '.');
const sourceFiles = ['index.html', 'privacy.html', 'script.js', 'style.css'];
const allFiles = new Map();

function walk(directory) {
  for (const entry of readdirSync(directory)) {
    const fullPath = join(directory, entry);
    if (statSync(fullPath).isDirectory()) walk(fullPath);
    else allFiles.set(relative(siteRoot, fullPath).replaceAll('\\', '/').toLowerCase(), relative(siteRoot, fullPath).replaceAll('\\', '/'));
  }
}

function isLocalPath(value) {
  return value && !/^(?:https?:|mailto:|tel:|#|data:|javascript:)/i.test(value);
}

function checkPath(value, sourceFile) {
  if (value.includes('${')) return;
  const cleanValue = value.split(/[?#]/, 1)[0];
  if (!isLocalPath(cleanValue)) return;
  if (cleanValue !== cleanValue.trim()) errors.push(`${sourceFile}: مسار يحتوي مسافة زائدة: ${JSON.stringify(value)}`);
  const expected = normalize(join(dirname(sourceFile), cleanValue)).replaceAll('\\', '/');
  const actual = allFiles.get(expected.toLowerCase());
  if (!actual) errors.push(`${sourceFile}: ملف مفقود: ${cleanValue}`);
  else if (actual !== expected) errors.push(`${sourceFile}: اختلاف حالة الأحرف: ${cleanValue} (الصحيح: ${actual})`);
}

walk(siteRoot);
const errors = [];
for (const sourceFile of sourceFiles) {
  const fullPath = join(siteRoot, sourceFile);
  if (!existsSync(fullPath)) {
    errors.push(`ملف مصدر الاختبار مفقود: ${sourceFile}`);
    continue;
  }
  const source = readFileSync(fullPath, 'utf8');
  const sourceForPaths = sourceFile === 'script.js'
    ? source.replace(/^\s*\/\/.*$/gm, '')
    : source;
  const pathExpressions = [
    /\b(?:src|href)=["']([^"']+)["']/gi,
    /["'](images\/[^"']+)["']/gi,
    /url\(["']?([^"')]+)["']?\)/gi,
  ];
  for (const expression of pathExpressions) {
    for (const match of sourceForPaths.matchAll(expression)) checkPath(match[1], sourceFile);
  }
}

if (errors.length) {
  console.error(`فشل فحص الأصول المحلية (${errors.length}):`);
  errors.forEach(error => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  console.log(`نجح فحص الأصول المحلية: ${allFiles.size} ملفًا دون مسارات مفقودة أو اختلاف حالة أحرف.`);
}
