# captcha-component-react-next-custom

## English Documentation

### 📦 Installation

To install this package, run the following command:

```sh
npm install captcha-component-react-next-custom
```

---

### 🚀 Usage

#### In React with TypeScript

```tsx
import React from "react";
import Captcha from "captcha-component-react-next-custom";

const App = () => {
  return (
    <div>
      <Captcha
        charCount={6}
        backgroundColor="#f3f4f6"
        onChange={(isValid) => console.log(isValid)}
      />
    </div>
  );
};

export default App;
```

---

### 📘 API Documentation

#### Properties

| Name              | Type                         | Default                                                            | Description                                        |
| ----------------- | ---------------------------- | ------------------------------------------------------------------ | -------------------------------------------------- |
| `onChange`        | `(isValid: boolean) => void` | **Required**                                                       | Function triggered when CAPTCHA validation changes |
| `charCount`       | `number`                     | `6`                                                                | Number of characters in the CAPTCHA code           |
| `caseSensitive`   | `boolean`                    | `false`                                                            | Whether CAPTCHA validation is case-sensitive       |
| `chars`           | `string`                     | `"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"` | Characters to use for generating the CAPTCHA code  |
| `backgroundColor` | `string`                     | `"#f3f4f6"`                                                        | Background color of the CAPTCHA canvas             |
| `noiseDensity`    | `number`                     | `100`                                                              | Density of noise dots on the canvas                |
| `lineCount`       | `number`                     | `5`                                                                | Number of random lines drawn on the canvas         |
| `font`            | `string`                     | `"Arial"`                                                          | Font family for the CAPTCHA text                   |
| `canvasWidth`     | `number`                     | `220`                                                              | Width of the CAPTCHA canvas                        |
| `canvasHeight`    | `number`                     | `50`                                                               | Height of the CAPTCHA canvas                       |
| `padding`         | `number`                     | `10`                                                               | Padding around the CAPTCHA text                    |

#### Examples

##### 1. Customizing the CAPTCHA length

```tsx
<Captcha charCount={4} onChange={(isValid) => console.log(isValid)} />
```

##### 2. Changing the background color

```tsx
<Captcha backgroundColor="#000000" />
```

##### 3. Enabling case-sensitive validation

```tsx
<Captcha caseSensitive={true} />
```

##### 4. Adjusting noise density and lines

```tsx
<Captcha noiseDensity={200} lineCount={10} />
```

##### 5. Customizing the font and padding

```tsx
<Captcha font="Courier New" padding={20} />
```

---

### 📂 Project Structure

```
📁 src/
 ├── 📁 components/ (Includes `Captcha.tsx`)
 ├── 📁 types/ (TypeScript definitions like `CaptchaProps.ts`)
 ├── 📁 utils/ (Utility functions like `drawCaptcha.ts` and `generateRandomCode.ts`)
 └── 📄 index.ts (Package entry point)
```

---

### 🧪 Testing

To run tests, use the following command:

```sh
npm test
```

---

### 📜 License

This package is licensed under the **MIT** license.

---

### 🤝 Contribution

If you want to contribute to this project, please submit a **Pull Request**!

---

### 📞 Contact

- **Email:** behnambashiri80@gmail.com
- **GitHub:** [Behnam-Bashiri](https://github.com/Behnam-Bashiri)

---

## مستندات فارسی

### 📦 نصب

برای نصب این پکیج، دستور زیر را اجرا کنید:

```sh
npm install captcha-component-react-next-custom
```

---

### 🚀 استفاده

#### در React با TypeScript

```tsx
import React from "react";
import Captcha from "captcha-component-react-next-custom";

const App = () => {
  return (
    <div>
      <Captcha
        charCount={6}
        backgroundColor="#f3f4f6"
        onChange={(isValid) => console.log(isValid)}
      />
    </div>
  );
};

export default App;
```

---

### 📘 مستندات API

#### پراپرتی‌ها

| نام               | نوع                          | مقدار پیش‌فرض                                                      | توضیحات                                       |
| ----------------- | ---------------------------- | ------------------------------------------------------------------ | --------------------------------------------- |
| `onChange`        | `(isValid: boolean) => void` | **ضروری**                                                          | تابعی که هنگام تغییر اعتبار کپچا اجرا می‌شود  |
| `charCount`       | `number`                     | `6`                                                                | تعداد کاراکترهای کپچا                         |
| `caseSensitive`   | `boolean`                    | `false`                                                            | آیا اعتبار کپچا حساس به حروف کوچک و بزرگ است؟ |
| `chars`           | `string`                     | `"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"` | مجموعه کاراکترهای قابل استفاده در کپچا        |
| `backgroundColor` | `string`                     | `"#f3f4f6"`                                                        | رنگ پس‌زمینه کپچا                             |
| `noiseDensity`    | `number`                     | `100`                                                              | میزان تراکم نویز روی کپچا                     |
| `lineCount`       | `number`                     | `5`                                                                | تعداد خطوط تصادفی در کپچا                     |
| `font`            | `string`                     | `"Arial"`                                                          | فونت استفاده‌شده برای متن کپچا                |
| `canvasWidth`     | `number`                     | `220`                                                              | عرض بوم کپچا                                  |
| `canvasHeight`    | `number`                     | `50`                                                               | ارتفاع بوم کپچا                               |
| `padding`         | `number`                     | `10`                                                               | فاصله اطراف متن کپچا                          |

#### مثال‌ها

##### 1. تنظیم تعداد کاراکترهای کپچا

```tsx
<Captcha charCount={4} onChange={(isValid) => console.log(isValid)} />
```

##### 2. تغییر رنگ پس‌زمینه

```tsx
<Captcha backgroundColor="#000000" />
```

##### 3. فعال‌سازی اعتبار حساس به حروف کوچک و بزرگ

```tsx
<Captcha caseSensitive={true} />
```

##### 4. تنظیم تراکم نویز و خطوط

```tsx
<Captcha noiseDensity={200} lineCount={10} />
```

##### 5. سفارشی‌سازی فونت و فاصله‌گذاری

```tsx
<Captcha font="Courier New" padding={20} />
```

---

### 📂 ساختار پروژه

```
📁 src/
 ├── 📁 components/ (شامل `Captcha.tsx`)
 ├── 📁 types/ (تعاریف TypeScript مانند `CaptchaProps.ts`)
 ├── 📁 utils/ (توابع کمکی مانند `drawCaptcha.ts` و `generateRandomCode.ts`)
 └── 📄 index.ts (نقطه ورود پکیج)
```

---

### 🧪 تست

برای اجرای تست‌ها از این دستور استفاده کنید:

```sh
npm test
```
