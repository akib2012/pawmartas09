
# 🐾 Winter Woofs – Winter Pet Care Application

A modern, responsive React-based winter pet care platform built with **React**, **Tailwind CSS**, **DaisyUI**, **Swiper**, **AOS**,**more pakages**, and **Firebase Authentication**.
The project demonstrates clean UI design, route protection, dynamic content rendering, and smooth user experience for pet lovers.

 

## 🚀 Technologies Used

* **React.js** (with React Router v6)
* **Tailwind CSS** + **DaisyUI** (for modern UI components)
* **Firebase Authentication** (Email/Password + Google)
* **Swiper.js** (hero slider and vet section)
* **AOS** (scroll animations)
* **React Toastify** (toast notifications)
* **JSON Data** (for dynamic content loading)

 

## 🧭 Project Overview

### 🧩 Layout Structure

#### **Navbar**

* Logo (click → Home)
* Navigation Links: **Home | Services | My Profile**
* If logged in → show user avatar with display name on hover
* If logged out → show **Login** buttons
* Logout button visible for logged-in users

#### **Footer**

* Contact info
* Social links
* Privacy policy

#### **Main Section**

* Route-based dynamic content
* Persistent Navbar & Footer
* Responsive and crash-free navigation

 

## 🏠 Home Page

### 🎯 Hero Slider

* Warm, winter-themed **Swiper** banner
* Center-aligned heading, text

 

### ❄️ Popular Winter Care Services

* Cards showing:

  * Image
  * Service Name
  * Rating
  * Price
  * **View Details** button → navigates to Service Details page

### 🐕 Winter Care Tips

* Static or JSON-based tips on keeping pets warm & healthy

### 👩‍⚕️ Meet Our Expert Vets

* 3 cards showing vet name, image & expertise
* Animated using AOS and Swiper

### ➕Happy clients Section

*  Happy Clients :  here some of card here which is shown us some releevnt client reviews and starts 

## 📄 Service Details Page (Protected)

* Accessible **only to logged-in users**
* Displays all service info from JSON (image, name, rating, description, price, etc.)
* Includes a simple **Book Now Form**:

  * Name
  * Email 
  * Submit → shows success toast (no backend logic)
* Redirects unauthenticated users to **Login Page**

 

## 🔑 Authentication System (Firebase)

### 🔐 Login Page

* Fields: Email, Password
* Show/Hide Password toggle -> here use the react cons icons for the hide and show
* **Forget Password** 
* **Google Sign-in** option
* Toast for success/error
* Redirect to Home or intended route after login or relevent page

### 📝 Signup Page

* Fields: Name, Email, Photo URL, Password
* Password validation:

  * Min length 6
  * Must contain uppercase & lowercase letters and also special carecter
* Google authentication option
* Toast for success/error

 

## 👤 My Profile Page

* Displays logged-in user info:

  * Name
  * Email
  * Profile Image
* **Update Profile** button (can navigate to a form)
* Optional Challenge: use Firebase `updateProfile()` to allow name/photo update

 

## ⚙️ Challenges Implemented

* Protected Routes using React Router
* Dynamic Route Loading with Fallback Spinner
* AOS & Animate.css for scroll animations
* Toast notifications for login/register actions
* Password toggle functionality
* Google Authentication Integration
* Firebase Reset Password feature (redirects to Gmail)

 

## 📦 npm Packages Used

* `react-router-dom` → Routing
* `firebase` → Authentication
* `react-toastify` → Notifications
* `swiper` → Hero slider
* `aos` → Animations
* `tailwindcss` / `daisyui` → Styling

 

## 🌐 Live Demo

**Live Link:** : https://effulgent-mousse-d292c5.netlify.app/


 

## 👨‍💻 Developed By

**MD Perbej Bhuiyan Akib**

