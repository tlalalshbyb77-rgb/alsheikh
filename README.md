# موقع الشيخ للحلويات

موقع ثابت لا يحتاج إلى خطوة بناء. للنشر، ارفع محتويات هذا المجلد إلى جذر الاستضافة مع الحفاظ على بنية مجلد `images`.

## التحقق قبل النشر

شغّل فحص الأصول المحلية (يتطلب Node.js 18 أو أحدث):

```powershell
node tests/check-local-assets.mjs .
```

يفحص هذا الأمر المسارات المحلية المستخدمة في HTML وJavaScript وCSS، بما فيها المسافات الزائدة واختلاف حالة الأحرف التي قد تؤدي إلى 404 بعد النشر على خادم Linux.

## ترويسات الأمان على الاستضافة

الملف HTML لا يستطيع فرض ترويسات HTTP مثل HSTS أو `frame-ancestors` بشكل موثوق. أضفها في الاستضافة أو CDN بعد اختبارها، مثل:

```text
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Content-Security-Policy: default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; img-src 'self' data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self'; connect-src 'self'; form-action 'self'
```

لا تفعّل HSTS إلا بعد التأكد من أن HTTPS يعمل على النطاق وجميع النطاقات الفرعية التي ستشملها السياسة.
