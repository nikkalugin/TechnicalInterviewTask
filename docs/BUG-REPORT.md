# 🐞 Bug Report

## 🔖 Title:  
Login Button Active with Empty Fields on Login Page

---

## 🐛 Bug Description:  
Кнопка входу (`Login`) залишається активною навіть тоді, коли поля "Username" та "Password" не заповнені.

---

## 🔁 Steps to Reproduce:  
1. Перейти на сторінку: [https://www.saucedemo.com/](https://www.saucedemo.com/)  
2. Залишити поля "Username" та "Password" порожніми  
3. Звернути увагу на стан кнопки `Login`  
4. Натиснути кнопку `Login`

---

## ❌ Observed Result:  
Кнопка `Login` активна. Після натискання з'являється повідомлення про помилку:  
`Epic sadface: Username is required`

---

## ✅ Expected Result:  
Кнопка `Login` має бути неактивною (disabled), поки не буде заповнено обидва поля: "Username" і "Password"

---

## 🧪 Environment:  
- 🌐 Browser: Google Chrome 124.0  
- 💻 OS: Windows 11  
- 📱 Screen Resolution: 1920x1080  
- 🔗 URL: [https://www.saucedemo.com/](https://www.saucedemo.com/)  
- 🕐 Date/Time: 2025-04-30, 17:12