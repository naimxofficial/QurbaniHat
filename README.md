# 🐄 QurbaniHat

> **Book your Qurbani animal with confidence.**

QurbaniHat is a modern livestock marketplace built for Eid ul Adha. Browse vet-checked cows, goats, and sheep from verified sellers across Bangladesh, view full animal details, and place your booking in minutes — no account needed to browse.

🌐 **Live Site:** [https://qurbanihat-kappa.vercel.app/](https://qurbanihat-kappa.vercel.app/)

---

## ✨ Features

| Feature | Details |
|--------|---------|
| 🏠 **Hero Section** | Full-screen banner with Eid ul Adha 2025 announcement strip and Browse Animals CTA |
| ⭐ **Featured Animals** | Top 4 animals fetched from API displayed in a responsive grid with animated cards |
| 🐄 **All Animals Page** | Full listing of all available livestock with image, breed, price, weight & age |
| 🗂️ **Category Filter** | Filter animals by category (Cow, Goat, Sheep etc.) via URL query params |
| 🔃 **Sort by Price** | Sort all animals by price Low→High or High→Low via dropdown — updates URL params |
| 🔍 **Animal Detail Page** | Full detail view — image, name, breed, price, weight, age, location, category & description |
| 📋 **Booking Form** | Name, email, phone & address form with validation and toast success notification |
| 📚 **Qurbani Tips** | 6 Islamic guideline cards — Age rules, Health check, Cow sharing, Meat distribution, Timing & Slaughter |
| 🏆 **Top Breeds** | Curated list of top Qurbani breeds (Merino Sheep, Jamnapari Goat, Deshi Khashi, Friesian Cow) |
| 🚫 **Custom 404 Page** | Styled "Something went wrong" page with Return to Safety button |
| 🔔 **Toast Notifications** | Booking success feedback via React Toastify |
| 🎞️ **Animate.css Cards** | Animal cards fade in with `animate__fadeInUpBig` animation on load |
| 📱 **Fully Responsive** | Mobile-first layout across all pages |
| 🎨 **Green Nature Theme** | Deep green color palette throughout with color-coded animal type badges |

---

## 📄 Pages & Routes

| Route | Page |
|-------|------|
| `/` | Home — Hero, Featured Animals, Qurbani Tips, Top Breeds |
| `/allanimals` | All Animals — Category filter + Sort by Price |
| `/allanimals/:id` | Animal Detail — Full info + Booking Form |
| `*` | Custom 404 Page |

---

## 🛠️ Built With

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5-5A0EF8?style=flat&logo=daisyui&logoColor=white)
![HeroUI](https://img.shields.io/badge/HeroUI-3-000000?style=flat&logo=react&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-7-47A248?style=flat&logo=mongodb&logoColor=white)
![Better Auth](https://img.shields.io/badge/Better--Auth-1.6-gray?style=flat)
![React Icons](https://img.shields.io/badge/React--Icons-5-E91E63?style=flat&logo=react&logoColor=white)
![React Toastify](https://img.shields.io/badge/React--Toastify-11-FFCD00?style=flat&logo=react&logoColor=black)
![Animate.css](https://img.shields.io/badge/Animate.css-4-blueviolet?style=flat)
