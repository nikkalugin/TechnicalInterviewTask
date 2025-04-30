# 🧪 Test Cases Documentation

## ✅ Section: Login Tests

---

### **Test Title:** Successful Login with Valid Credentials  
**Description:** Перевірка успішного входу в систему з валідними даними.  
**Preconditions:**  
Користувач знаходиться на сторінці [https://www.saucedemo.com/](https://www.saucedemo.com/)

**Test Steps:**  
1. Ввести `standard_user` в поле Username  
2. Ввести `secret_sauce` в поле Password  
3. Натиснути кнопку Login  

**Expected Results:**  
Користувач успішно переходить на сторінку "Products", заголовок якої — **Products**

---

### **Test Title:** Error Message for Invalid Username Credential  
**Description:** Перевірка повідомлення про помилку при введенні невірного імені користувача  
**Preconditions:**  
Користувач знаходиться на сторінці [https://www.saucedemo.com/](https://www.saucedemo.com/)

**Test Steps:**  
1. Ввести `standard_use` в поле Username  
2. Ввести `secret_sauce` в поле Password  
3. Натиснути кнопку Login  

**Expected Results:**  
Показується повідомлення про помилку:  
`Epic sadface: Username and password do not match any user in this service`

---

### **Test Title:** Error Message for Invalid Password Credential  
**Description:** Перевірка повідомлення про помилку при введенні невірного паролю  
**Preconditions:**  
Користувач знаходиться на сторінці [https://www.saucedemo.com/](https://www.saucedemo.com/)

**Test Steps:**  
1. Ввести `standard_user` в поле Username  
2. Ввести `secret_sauc` в поле Password  
3. Натиснути кнопку Login  

**Expected Results:**  
Показується повідомлення про помилку:  
`Epic sadface: Username and password do not match any user in this service`

---

### **Test Title:** Error Message for Empty Credentials  
**Description:** Перевірка повідомлення про помилку при порожніх полях логіну та паролю  
**Preconditions:**  
Користувач знаходиться на сторінці [https://www.saucedemo.com/](https://www.saucedemo.com/)

**Test Steps:**  
1. Не вводити жодних даних у поля  
2. Натиснути кнопку Login  

**Expected Results:**  
Показується повідомлення про помилку:  
`Epic sadface: Username is required`

---

### **Test Title:** Error Message for Empty Password Credentials  
**Description:** Перевірка повідомлення про помилку при порожньому полі пароля  
**Preconditions:**  
Користувач знаходиться на сторінці [https://www.saucedemo.com/](https://www.saucedemo.com/)

**Test Steps:**  
1. Ввести `standard_user` в поле Username  
2. Не вводити пароль  
3. Натиснути кнопку Login  

**Expected Results:**  
Показується повідомлення про помилку:  
`Epic sadface: Password is required`

---

### **Test Title:** Error Message for Empty Username Credentials  
**Description:** Перевірка повідомлення про помилку при порожньому полі логіну  
**Preconditions:**  
Користувач знаходиться на сторінці [https://www.saucedemo.com/](https://www.saucedemo.com/)

**Test Steps:**  
1. Не вводити логін  
2. Ввести `secret_sauce` в поле Password  
3. Натиснути кнопку Login  

**Expected Results:**  
Показується повідомлення про помилку:  
`Epic sadface: Username is required`

---

### **Test Title:** Password Input Masking  
**Description:** Перевірка, що поле пароля приховує символи  
**Preconditions:**  
Користувач знаходиться на сторінці [https://www.saucedemo.com/](https://www.saucedemo.com/)

**Test Steps:**  
1. Перевірити атрибут `type` поля Password  

**Expected Results:**  
Поле має тип `password`, що забезпечує приховування введених символів

---

## ✅ Section: Purchase Tests

---

### **Test Title:** Complete Flow for Purchasing  
**Description:** Повна перевірка процесу покупки товарів від додавання в кошик до підтвердження замовлення  
**Preconditions:**  
Користувач знаходиться на сторінці [https://www.saucedemo.com/](https://www.saucedemo.com/)  
Авторизований під логіном `standard_user` з паролем `secret_sauce`

**Test Steps:**  
1. Додати "Sauce Labs Backpack" до кошика  
2. Додати "Sauce Labs Fleece Jacket" до кошика  
3. Перейти до кошика  
4. Перевірити наявність обох товарів у кошику  
5. Натиснути Checkout  
6. Заповнити форму:  
   - First Name: `Test First Name`  
   - Last Name: `Test Last Name`  
   - Zip/Postal Code: `Test Zip/Postal Code`  
7. Натиснути Continue  
8. Перевірити, що обидва товари відображаються на сторінці "Checkout: Overview"  
9. Натиснути Finish  

**Expected Results:**  
- Відкривається сторінка **Checkout: Complete!**  
- Відображається повідомлення:  
  - `Thank you for your order!`  
  - `Your order has been dispatched, and will arrive just as fast as the pony can get there!`

---