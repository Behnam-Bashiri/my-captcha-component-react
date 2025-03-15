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
        length={6}
        theme="dark"
        onVerify={(isValid) => console.log(isValid)}
      />
    </div>
  );
};

export default App;
```

---

### 📘 API Documentation

#### Properties

| Name       | Type                         | Default   | Description                                       |
| ---------- | ---------------------------- | --------- | ------------------------------------------------- |
| `length`   | `number`                     | `6`       | Number of characters in the captcha               |
| `theme`    | `'light' \| 'dark'`          | `'light'` | Captcha theme setting                             |
| `onVerify` | `(isValid: boolean) => void` | -         | Function to check if the entered value is correct |

#### Examples

##### 1. Customizing the captcha length

```tsx
<Captcha length={4} onVerify={(isValid) => console.log(isValid)} />
```

##### 2. Changing the theme to dark mode

```tsx
<Captcha theme="dark" />
```

##### 3. Handling user input validation

```tsx
<Captcha onVerify={(isValid) => alert(isValid ? "Correct!" : "Wrong!")} />
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
        length={6}
        theme="dark"
        onVerify={(isValid) => console.log(isValid)}
      />
    </div>
  );
};

export default App;
```

---

### 📘 مستندات API

#### پراپرتی‌ها

| نام        | نوع                          | مقدار پیش‌فرض | توضیحات                                              |
| ---------- | ---------------------------- | ------------- | ---------------------------------------------------- |
| `length`   | `number`                     | `6`           | تعداد کاراکترهای کپچا                                |
| `theme`    | `'light' \| 'dark'`          | `'light'`     | تغییر تم کپچا                                        |
| `onVerify` | `(isValid: boolean) => void` | -             | تابعی که بررسی می‌کند مقدار وارد شده صحیح است یا خیر |

#### مثال‌ها

##### 1. تغییر تعداد کاراکترهای کپچا

```tsx
<Captcha length={4} onVerify={(isValid) => console.log(isValid)} />
```

##### 2. تغییر تم به حالت تاریک

```tsx
<Captcha theme="dark" />
```

##### 3. بررسی مقدار ورودی

```tsx
<Captcha onVerify={(isValid) => alert(isValid ? "درست است!" : "اشتباه است!")} />
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

---

### 📜 مجوز

این پکیج تحت **MIT** منتشر شده است.

---

### 🤝 مشارکت در پروژه

اگر می‌خواهید در توسعه این پروژه کمک کنید، لطفاً یک **Pull Request** ارسال کنید!

---

### 📞 ارتباط با ما

- **ایمیل:** behnambashiri80@gmail.com
- **گیت‌هاب:** [Behnam-Bashiri](https://github.com/Behnam-Bashiri)
