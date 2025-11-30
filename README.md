# 📚 Study Hall Reservation App

This is a simple Next.js app that lets users reserve or cancel reservations for study spaces.

---

## 🧩 Features
- Built with **Next.js** (React framework)
- Displays a list of study spaces (using `.map()`)
- Uses **useState** to track reservation status
- Updates the UI dynamically with **event handlers**
- Organized into multiple components

---

## 🧱 Components
1. `StudySpaceCard` – Displays the name, capacity, and button for each study space.
2. `ReserveButton` – A button that toggles between “Reserve” and “Cancel Reservation.”
3. `page.tsx` – Main page where the list of spaces and state live.

---

## ⚙️ How it works
- State (`reserved`) lives in `page.tsx`.
- `page.tsx` passes props down to each `StudySpaceCard`.
- Each `StudySpaceCard` passes an `onReserve` event to the button.
- Clicking a button toggles the reservation state, which re-renders the list.

---

## 💡 How AI/tutorials/starter code helped
This app was inspired by the standard **Next.js starter template** (`npx create-next-app@latest`).
AI was used to assist with code structure and readability, but all logic and styling were customized.

---

## 🧠 Why React (and Next.js)?
React automatically re-renders the UI when state changes, avoiding manual DOM manipulation.
This makes dynamic interactions like reserving study spaces **much easier and cleaner** than using vanilla JS.

---
