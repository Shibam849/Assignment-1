# Creative Showcase Web App

This is a responsive full-stack web application built for the Web Development assignment. It allows artists to register, login, upload their artwork to a personal dashboard, and share a public portfolio link.

## 🔗 Live Links
* **Frontend (Vercel):** [INSERT YOUR VERCEL LINK HERE]
* **Backend (Render):** [INSERT YOUR RENDER LINK HERE]

## 🛠 Technologies Used
* **Frontend:** React.js, CSS (Custom Masonry Layout)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas
* **Hosting:** Vercel (Client) & Render (Server)

## 📂 Project Structure
* `creative-showcase/`: Contains the React frontend code.
* `server/`: Contains the Node.js backend and API logic.

## ✨ Key Features
1.  **Mosaic/Masonry Layout:** The landing page and profiles use a CSS column layout to display images of different heights (responsive on mobile).
2.  **Authentication:** Users can Sign Up and Login. Session is managed via LocalStorage.
3.  **Image Upload:** Users can paste an image URL in their dashboard to add it to their collection.
4.  **Delete Option:** Users can remove images they uploaded.
5.  **Public Profiles:** Dynamic routing (`/profile/:username`) allows anyone to view a specific user's gallery.
