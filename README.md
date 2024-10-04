Food App
This is a full-stack web application designed for restaurant owners and clients. The app has two interfaces: one for restaurant owners to manage their menu and another for clients to place food orders.

Features
Owner Side:
Sign Up/Login: Restaurant owners can create an account and log in.
Menu Management: Owners can add, edit, or remove menu items, and set their prices.
Client Side:
Order Food: Clients can browse the restaurant's menu and place orders.

Technologies Used
Frontend:
React.js:
React.js is used for building the entire frontend of the app. Components like Login, SignUp, MenuList, and OrderForm are created using React, making the UI highly modular and easy to manage. React's state management is employed to handle form inputs, client orders, and real-time updates of menu items.
Routing: React Router is used to handle the navigation between different pages of the app such as the home page, login page, signup page, and dashboard.
CSS:
Custom CSS is applied to style the app, ensuring a user-friendly and responsive interface. CSS is used for layout design, typography, and responsive behavior across mobile, tablet, and desktop views. CSS Grid and Flexbox are utilized to align and manage components dynamically.

Backend:
Spring Boot:
Spring Boot powers the backend of the application. RESTful APIs are developed to manage operations such as user authentication, menu management, and order processing. Controllers are built to handle HTTP requests coming from the React frontend, and services are used to implement the business logic for each feature.
Menu Management API: A set of APIs are created to allow the owner to add, update, or delete menu items. The owner’s authentication status is checked using Spring Security before any action is performed.
Spring Security:
Spring Security is integrated to secure both the owner and client sides of the application. It handles authentication and authorization using JWT (JSON Web Token). Owners must log in to manage menus, and clients are authenticated before placing orders. Security configurations ensure that unauthorized users cannot access restricted endpoints.

Database:
MySQL:
MySQL is used as the relational database to store all persistent data such as owner credentials, menu items, prices, and client orders. The database schema includes tables for users, menu items, and orders.
Data Persistence: JPA (Java Persistence API) and Hibernate are used to map database entities to Java objects, making it easier to interact with the database. CRUD operations are performed on the database through repositories to keep menu items and orders in sync.

Home Page:
![home page](https://github.com/user-attachments/assets/c3c11cf1-176a-4610-8259-378b92037d97)


Login Page:
![WhatsApp Image 2024-10-04 at 3 49 24 PM](https://github.com/user-attachments/assets/58ceec38-53d9-4a3a-a5a6-e37a199c6969)


Sign-Up Page:
![register](https://github.com/user-attachments/assets/2e56aa87-b0df-4cef-9094-a6fb077777e7)


Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.
