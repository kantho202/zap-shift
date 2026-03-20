<div align="center">

<img src="src/assets/logo.png" alt="Zap Shift Logo" width="120" />

# ⚡ Zap Shift

### Fast. Reliable. Delivered.

A full-stack parcel delivery management platform connecting **users**, **riders**, and **admins** — with real-time tracking, smart cost calculation, and seamless payments.

🌐 **Live Site:** [https://zap-shift-45b3e.web.app](https://zap-shift-45b3e.web.app/)

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Firebase-orange?style=for-the-badge)](https://zap-shift-45b3e.web.app/)
[![Backend](https://img.shields.io/badge/🔗_Backend_API-Vercel-black?style=for-the-badge)](https://zap-shift-server-ten-sandy.vercel.app)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Firebase](https://img.shields.io/badge/Firebase-Auth_&_Hosting-FFCA28?style=for-the-badge&logo=firebase)](https://firebase.google.com)

</div>

---

## ✨ Features at a Glance

| Feature | Description |
|---|---|
| 📦 **Parcel Booking** | Book deliveries with dynamic cost calculation by weight & distance |
| 🗺️ **Live Coverage Map** | Interactive Leaflet map showing all 64 districts of Bangladesh |
| 🔍 **Parcel Tracking** | Real-time tracking via unique tracking ID — no login required |
| 💳 **Stripe Payments** | Secure checkout with full payment history |
| 🛵 **Rider Workflow** | Riders apply, get approved, and manage their deliveries |
| 🔐 **Role-Based Access** | Three roles: `user`, `rider`, `admin` — each with a tailored dashboard |
| 🔔 **Smart Notifications** | SweetAlert2 confirmations and toast feedback throughout |

---

## 🏗️ Tech Stack

**Frontend**
- [React 19](https://react.dev) + [Vite 7](https://vitejs.dev)
- [React Router 7](https://reactrouter.com) — file-based routing with loaders
- [TanStack React Query](https://tanstack.com/query) — server state & caching
- [React Hook Form](https://react-hook-form.com) — performant form handling
- [Tailwind CSS 4](https://tailwindcss.com) + [DaisyUI](https://daisyui.com) — utility-first UI

**Backend & Services**
- [Firebase Auth](https://firebase.google.com/docs/auth) — Email/Password + Google OAuth
- [Firebase Hosting](https://firebase.google.com/docs/hosting) — static deployment
- [Axios](https://axios-http.com) — HTTP client with JWT interceptors
- [Stripe](https://stripe.com) — payment processing
- [Vercel](https://vercel.com) — backend API hosting

**UI & Extras**
- [React Leaflet](https://react-leaflet.js.org) — interactive maps
- [Swiper](https://swiperjs.com) — touch-friendly carousels
- [Lottie React](https://lottiereact.com) — smooth animations
- [React Icons](https://react-icons.github.io/react-icons) — icon library
- [SweetAlert2](https://sweetalert2.github.io) — beautiful alerts

---

## 🗂️ Project Structure

```
zap-shift/
├── public/
│   ├── reviews.json          # Customer reviews data
│   └── serviceCenter.json    # 64 district service centers
├── src/
│   ├── assets/               # Images, banners, brand logos
│   ├── components/           # Shared UI (Loading, Forbidden, Logo)
│   ├── context/              # AuthContext + AuthProvider
│   ├── Firebase/             # Firebase initialization
│   ├── hooks/                # useAuth, useRole, useAxios, useAxiosSecure
│   ├── layout/               # RootLayout, AuthLayout, DashBoardLayout
│   ├── pages/
│   │   ├── Home/             # Landing page sections
│   │   ├── Auth/             # Login, Register, ForgetPassword
│   │   ├── AddParcel/        # Parcel booking form
│   │   ├── Coverage/         # District map
│   │   ├── ParcelTrack/      # Public tracking page
│   │   ├── Pricing/          # Pricing info
│   │   └── DashBoard/        # Role-based dashboard pages
│   └── routes/               # Router, PrivateRouter, AdminRouter, RiderRouter
└── animations/               # Lottie JSON files
```

---

## 🔐 Authentication & Roles

```
Firebase Auth ──► JWT Token ──► Axios Interceptor ──► Backend API
```

| Role | Access |
|---|---|
| `user` | Book parcels, track, pay, view history |
| `rider` | View assigned deliveries, mark completed |
| `admin` | Approve riders, assign deliveries, manage users |

Auto-logout triggers on `401` / `403` responses via Axios response interceptor.

---

## 💰 Pricing Logic

| Type | Same District | Different District |
|---|---|---|
| Document | ৳ 60 | ৳ 80 |
| Package (< 3kg) | ৳ 110 | ৳ 150 |
| Package (≥ 3kg) | ৳ 110 + ৳40/kg extra | ৳ 150 + ৳40/kg extra + ৳40 |

---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/your-username/zap-shift.git  # replace with your repo URL
cd zap-shift

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Fill in your Firebase config values

# 4. Start dev server
npm run dev
```

### Environment Variables

```env
VITE_apiKey=
VITE_authDomain=
VITE_projectId=
VITE_storageBucket=
VITE_messagingSenderId=
VITE_appId=
VITE_image_host_key=
```

### Deploy to Firebase

```bash
npm run build
firebase deploy
```

> Always run `npm run build` before `firebase deploy` — Vite bakes env vars into the bundle at build time.

---

## 📡 Key API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/parcels?email=` | Get user's parcels |
| `POST` | `/parcels` | Create new parcel |
| `DELETE` | `/parcels/:id` | Delete a parcel |
| `GET` | `/users/:email/role` | Get user role |
| `POST` | `/create-checkout-session` | Stripe payment session |
| `GET` | `/parcels/delivery-status/stars` | Delivery stats for admin |

---

## 📸 Pages Overview

- **Home** — Banner, How It Works, Services, Brands, Delivery info, Merchant CTA, Reviews carousel, FAQ
- **Coverage** — Searchable Leaflet map of all 64 Bangladesh districts
- **Add Parcel** — Multi-step form with region/district dropdowns and auto cost calculation
- **Parcel Track** — Public tracking page by tracking ID
- **Dashboard (User)** — My Parcels, Payment, Payment History
- **Dashboard (Rider)** — Assigned Deliveries, Completed Deliveries
- **Dashboard (Admin)** — Stats, Approve Riders, Assign Riders, Users Management

---

<div align="center">

Made with ❤️ · Powered by React & Firebase

</div>
