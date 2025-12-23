# JS-Course-Project
JavaScript Web Project implementing authentication using cookies and a dynamic product slider with detailed product view.
# JavaScript Authentication & Product Slider Project

## 📖 Overview
This project is a front-end JavaScript web application developed as part of an ITI JavaScript course.  
It demonstrates basic authentication using cookies, dynamic product rendering, and navigation between multiple pages.

---

## 🎯 Project Objectives
- Practice JavaScript DOM manipulation  
- Understand cookies for simple authentication  
- Implement page navigation and data passing  
- Build a dynamic product slider and details view  

---

## 🧩 Application Structure
The project consists of the following main pages:

### 1️⃣ Sign Up Page
- Allows the user to register.  
- User data is stored in a browser cookie.  
- Cookie is used later for authentication.  

### 2️⃣ Sign In Page
- Checks if the required authentication cookie exists.  
- Prevents unauthorized access if the cookie is missing.  

### 3️⃣ Index Page
- Displays a slider of products.  
- Each product includes:  
  - Title  
  - Image  
  - Details button  
- Products are rendered dynamically using JavaScript.  

### 4️⃣ Product Details Page
- Displays full details of a selected product.  
- Product data is passed from the index page.  
- Shows complete product information clearly.  

---

## 🛠️ Technologies Used
- HTML5  
- CSS3  
- Vanilla JavaScript  
- Browser Cookies  

---

## 🔐 Authentication Logic
Authentication is handled using cookies:
- If the authentication cookie does not exist:  
  - The user is redirected to the Sign In page.  
- Cookie validation is performed before accessing protected pages.  

---

## 🚀 How to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/faissalelmasry/JS-Course-Project.git
Open the project folder.

Run the project by opening SignIn.html in a browser.

Sign up first, then sign in to access the main content.

## 📌 Notes
This project is for educational purposes.

No backend or database is used.

Authentication is simulated using browser cookies only.

## 👨‍💻 Author
Faissal Mahmoud  
ITI Trainee
