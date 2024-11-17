# 🏥 Apothecary-2-Go-Project

Welcome to **Apothecary2Go**, an ePharmacy Inventory Web App designed to simplify and streamline pharmaceutical inventory management! 💊💻

---

## **✨ Key Features**

- **Frontend**: Built with React for interactive and dynamic user interfaces 🖥️.
- **State Management**: Powered by Redux for efficient state handling ⚙️.
- **Backend**: Node.js and Express for a robust and scalable API 🚀.
- **Database**: MongoDB for flexible and powerful data storage 🗃️.
- **Deployment**: Hosted on Heroku for easy access 🌐.

---

## **🎯 Demo Website**

👉 [Apothecary2Go on Heroku](https://northeastern-apothecary2go.herokuapp.com/)

---

## **🛠️ Technologies Used**

### Frontend
- HTML5 and CSS3 ✨
- React: Components, Props, Events, Hooks, Router, Axios 🧩
- Redux: Store, Reducers, Actions ⚙️

### Backend
- Node & Express: Web API, Body Parser 🌐
- MongoDB: Mongoose, Aggregation 📂

### Development
- ESLint, Babel, Git, GitHub 🛠️

### Deployment
- Heroku 🚀

---

## **📚 To Run Locally**

### 1. Clone the Repository

```bash
$ git clone git@github.com:coder-chick/Apothecary2GO.git
$ cd Apothecary2GO
```

### 2. Setup MongoDB

- **Local MongoDB**
  - Install MongoDB from [here](https://www.mongodb.com/try/download/community).
  - Create a `.env` file in the root folder and set:
    ```env
    MONGODB_URL=mongodb://localhost/apothecary2go
    ```
- **Atlas Cloud MongoDB**
  - Create a database at [MongoDB Atlas](https://cloud.mongodb.com).
  - Create a `.env` file in the root folder and set:
    ```env
    MONGODB_URL=mongodb+srv://your-db-connection
    ```

### 3. Run Backend

```bash
$ cd backend
$ npm install
$ npm install nodemon
$ nodemon server.js
```

### 4. Run Frontend

```bash
# Open a new terminal
$ cd frontend
$ npm install
$ npm start
```

### 5. Create a User Account

- Sign up for a new user account to access the app 🛒.

### 6. Admin Login

- Includes admin and seller login. Contact [Semaa Amin](mailto:sema.amin9@gmail.com) to get credentials.
- Enter the admin email and password, then click **Sign In**.

---

## **🎨 Inspired By**

This project was inspired by the [Udemy](https://www.udemy.com/) course on building an eCommerce platform similar to Amazon:

👉 [Amazona on Udemy](https://www.udemy.com/course/build-ecommerce-website-like-amazon-react-node-mongodb/)

---

## **💡 Author**

**Semaa Amin**  
Passionate about creating impactful and user-friendly web applications! Feel free to reach out for collaboration or feedback. ✨

📧 [Email](mailto:sema.amin9@gmail.com)  
🌐 [LinkedIn](https://www.linkedin.com/in/semaa-amin/)  
