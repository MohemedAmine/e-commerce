# 🛍️ Online Shop

> A comprehensive e-commerce platform built with modern web technologies, delivering a seamless shopping experience with secure authentication, intelligent product management, and streamlined order processing.

![Node.js](https://img.shields.io/badge/Node.js-v14+-green?style=flat-square)
![Express.js](https://img.shields.io/badge/Express-4.18.2-blue?style=flat-square)
![MongoDB](https://img.shields.io/badge/MongoDB-6.3.0-green?style=flat-square)
![License](https://img.shields.io/badge/License-ISC-blue?style=flat-square)

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [📦 Installation](#-installation)
- [⚙️ Configuration](#️-configuration)
- [🚀 Usage](#-usage)
- [🌐 API Routes](#-api-routes)
- [🔄 Project Workflow](#-project-workflow)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👤 Author](#-author)

## ✨ Features

### 👥 User Features

| Feature               | Description                                          |
| --------------------- | ---------------------------------------------------- |
| 🔐 Authentication     | Secure registration and login with bcrypt encryption |
| 📦 Product Catalog    | Browse and explore product collections               |
| 🛒 Shopping Cart      | Add, manage, and organize items                      |
| 💳 Order Management   | Place orders and track order history                 |
| 📊 Session Management | Persistent user sessions with MongoDB                |

### 👨‍💼 Admin Features

| Feature               | Description                      |
| --------------------- | -------------------------------- |
| 📝 Product Management | Add, edit, and delete products   |
| 📤 Image Upload       | Upload and manage product images |
| 📋 Order Management   | View and manage customer orders  |
| ⚡ Dashboard          | Centralized admin control panel  |
| 🔍 Status Tracking    | Monitor order fulfillment        |

### 🛡️ Security Features

| Security Layer            | Implementation                            |
| ------------------------- | ----------------------------------------- |
| **Password Encryption**   | bcrypt with salt rounds                   |
| **Session Management**    | MongoDB session store with secure cookies |
| **Authentication Guards** | Role-based access control (User/Admin)    |
| **Input Validation**      | express-validator for all inputs          |
| **Flash Messages**        | CSRF protection with connect-flash        |

## 🛠️ Tech Stack

### Backend Architecture

```
┌─────────────────────────────────────────┐
│     Node.js Runtime Environment         │
├─────────────────────────────────────────┤
│  Express.js 4.18.2 (Web Framework)      │
├─────────────────────────────────────────┤
│  MongoDB 6.3.0 + Mongoose 8.0.3 (ORM)  │
├─────────────────────────────────────────┤
│  Session Management & Authentication    │
└─────────────────────────────────────────┘
```

| Layer              | Technology              | Purpose                          |
| ------------------ | ----------------------- | -------------------------------- |
| **Runtime**        | Node.js                 | JavaScript execution environment |
| **Framework**      | Express.js 4.18.2       | HTTP server & routing            |
| **Database**       | MongoDB 6.3.0           | NoSQL data storage               |
| **ODM**            | Mongoose 8.0.3          | Schema & data modeling           |
| **Authentication** | bcrypt 5.1.1            | Password hashing & verification  |
| **Sessions**       | connect-mongodb-session | Persistent session storage       |

### Frontend Stack

| Layer                | Technology  | Purpose                        |
| -------------------- | ----------- | ------------------------------ |
| **Template Engine**  | EJS 3.1.9   | Dynamic HTML rendering         |
| **CSS Framework**    | Bootstrap 5 | Responsive design & components |
| **DOM Manipulation** | jQuery      | Client-side interactivity      |
| **UI Enhancement**   | Popper.js   | Tooltip & dropdown positioning |

### Supporting Libraries

| Package             | Version      | Purpose                         |
| ------------------- | ------------ | ------------------------------- |
| `express-validator` | ^7.0.1       | Input validation & sanitization |
| `multer`            | ^1.4.5-lts.1 | File upload handling            |
| `body-parser`       | ^1.20.2      | Request body parsing            |
| `connect-flash`     | ^0.1.1       | Flash message delivery          |
| `express-session`   | ^1.17.3      | Session middleware              |

## 📁 Project Structure

```
project/
│
├── 📄 app.js                      ← Entry point & server configuration
├── 📄 package.json                ← Dependencies & metadata
│
├── 📁 assets/                     ← Static resources
│   ├── css/
│   │   └── bootstrap.min.css      ← Bootstrap styling
│   └── js/
│       ├── bootstrap.min.js       ← Bootstrap functionality
│       ├── jquery.min.js          ← jQuery library
│       └── popper.min.js          ← Popper utility
│
├── 📁 images/                     ← Product images storage
│
├── 📁 controllers/                ← Business logic layer (MVC)
│   ├── admin.controller.js        ← Admin operations
│   ├── auth.controller.js         ← Authentication logic
│   ├── cart.controller.js         ← Shopping cart operations
│   ├── home.controller.js         ← Homepage controller
│   ├── order.controller.js        ← Order management
│   └── product.controller.js      ← Product operations
│
├── 📁 models/                     ← MongoDB schemas (Data layer)
│   ├── admin.model.js
│   ├── auth.model.js
│   ├── cart.model.js
│   ├── order.model.js
│   └── products.model.js
│
├── 📁 routes/                     ← API endpoints (Router layer)
│   ├── admin.route.js
│   ├── auth.route.js
│   ├── cart.route.js
│   ├── home.route.js
│   ├── order.route.js
│   ├── product.route.js
│   └── 📁 guards/                 ← Authentication middleware
│       ├── admin.guard.js         ← Admin authorization
│       └── auth.guard.js          ← User authentication
│
└── 📁 views/                      ← Frontend templates (Presentation layer)
    ├── index.ejs                  ← Homepage template
    ├── product.ejs                ← Product details page
    ├── cart.ejs                   ← Shopping cart page
    ├── orders.ejs                 ← User orders page
    ├── add-product.ejs            ← Admin: Add product form
    ├── manage-orders.ejs          ← Admin: Orders management
    ├── login.ejs                  ← Login form
    ├── signUp.ejs                 ← Registration form
    ├── verifyOrder.ejs            ← Order confirmation page
    ├── error.ejs                  ← Error page
    ├── not-admin.ejs              ← Access denied page
    └── 📁 parts/                  ← Reusable components
        ├── header.ejs
        ├── navbar.ejs
        └── footer.ejs
```

**Architecture Pattern:** MVC (Model-View-Controller)

- **Models:** Data schemas and database interactions
- **Views:** EJS templates for frontend rendering
- **Controllers:** Business logic and request handling

## 📦 Installation

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** v14 or higher ([Download](https://nodejs.org/))
- **MongoDB** v4.4 or higher ([Download](https://www.mongodb.com/try/download/community))
- **npm** or **yarn** package manager

### Setup Steps

#### 1️⃣ Clone & Navigate to Project

```bash
git clone <repository-url>
cd project
```

#### 2️⃣ Install Dependencies

```bash
npm install
# or if using yarn
yarn install
```

#### 3️⃣ Start MongoDB Service

**Windows:**

```powershell
mongod
```

**macOS (using Homebrew):**

```bash
brew services start mongodb-community
```

**Linux:**

```bash
sudo service mongod start
```

✅ Verify MongoDB is running on `mongodb://localhost:27017`

#### 4️⃣ Launch the Application

```bash
node app.js
```

Expected output:

```
Server is running on port 3000
Connected to MongoDB
Session store initialized
```

#### 5️⃣ Access the Application

Open your browser and navigate to:

```
http://localhost:3000
```

## ⚙️ Configuration

### Environment Settings

Update the following configuration in `app.js`:

```javascript
// MongoDB Connection
URI: 'mongodb://localhost:27017/online-shop'

// Session Configuration
Secret: 'This is my secret to hash express sessions ...'
Collection: 'sessions'
Save Uninitialized: false
Resave: false
```

### 🔒 Production Recommendations

| Setting            | Current   | Recommended                        |
| ------------------ | --------- | ---------------------------------- |
| **Session Secret** | Hardcoded | Use environment variables          |
| **Database URI**   | Localhost | Use MongoDB Atlas or remote server |
| **Port**           | 3000      | Configure via environment variable |
| **Cookie Secure**  | false     | Set to `true` with HTTPS           |

### Database Collections

The application uses the following MongoDB collections:

| Collection | Purpose                        | Key Fields                          |
| ---------- | ------------------------------ | ----------------------------------- |
| `sessions` | User session storage           | sessionId, userId, expires          |
| `users`    | User accounts & authentication | email, password, role, created_at   |
| `products` | Product catalog                | name, price, image, category, stock |
| `carts`    | Shopping cart data             | userId, items, total, updatedAt     |
| `orders`   | Customer orders                | userId, items, total, status, date  |

## 🚀 Usage

### 👥 Customer Workflow

#### Step 1: Authentication

```
🔗 Navigate to http://localhost:3000/signup
│
├─ Create new account
│  ├─ Email validation
│  ├─ Password encryption (bcrypt)
│  └─ Auto-login after signup
│
└─ Or login with existing account at /login
```

#### Step 2: Browse Products

```
📦 Home Page (http://localhost:3000/)
│
├─ View all available products
├─ See product details (price, description, image)
├─ Check stock availability
└─ Search and filter options
```

#### Step 3: Shopping Experience

```
🛒 Shopping Cart
│
├─ Add products to cart (/cart/add/:id)
├─ View cart contents (/cart)
├─ Adjust quantities
├─ Remove items (/cart/remove/:id)
└─ Review total price
```

#### Step 4: Checkout & Orders

```
💳 Order Placement
│
├─ Verify order details (/verify-order)
├─ Confirm shipping information
├─ Place order (/place-order)
├─ Receive confirmation
└─ View order history (/orders)
```

---

### 👨‍💼 Administrator Workflow

#### Access Admin Dashboard

```
🔐 Admin Login Required
│
└─ Navigate to http://localhost:3000/admin
   └─ Redirects to /not-admin if unauthorized
```

#### Product Management

```
📝 Manage Products (/admin/products)
│
├─ View all products
├─ Add new product (/admin/add-product)
│  ├─ Upload product image
│  ├─ Enter name, price, description
│  ├─ Set stock quantity
│  └─ Confirm addition
│
├─ Edit existing product
│  └─ Update product details
│
└─ Delete product
   └─ Remove from catalog
```

#### Order Management

```
📋 Manage Orders (/admin/orders)
│
├─ View all customer orders
├─ See order details
│  ├─ Customer information
│  ├─ Items ordered
│  ├─ Order total
│  └─ Order date
│
├─ Update order status
│  ├─ Pending
│  ├─ Processing
│  ├─ Shipped
│  └─ Delivered
│
└─ Track fulfillment progress
```

## 🌐 API Routes

### Public Routes (No Authentication Required)

| Route          | Method     | Purpose           | Response                         |
| -------------- | ---------- | ----------------- | -------------------------------- |
| `/`            | `GET`      | Home page         | HTML page with products          |
| `/product`     | `GET`      | List all products | JSON/HTML product list           |
| `/product/:id` | `GET`      | Product details   | JSON/HTML product info           |
| `/login`       | `GET/POST` | User login        | Login form or session creation   |
| `/signup`      | `GET/POST` | User registration | Signup form or new user creation |
| `/error`       | `GET`      | Error page        | Error display page               |

### Protected Routes (User Authentication Required)

| Route              | Method | Purpose              | Response                   |
| ------------------ | ------ | -------------------- | -------------------------- |
| `/logout`          | `GET`  | User logout          | Redirect to home           |
| `/cart`            | `GET`  | View shopping cart   | HTML cart page             |
| `/cart/add/:id`    | `POST` | Add item to cart     | Updated cart/JSON response |
| `/cart/remove/:id` | `POST` | Remove from cart     | Updated cart/JSON response |
| `/orders`          | `GET`  | View user orders     | List of user's orders      |
| `/verify-order`    | `POST` | Verify order details | Order confirmation page    |
| `/place-order`     | `POST` | Place new order      | Order confirmation/JSON    |

### Admin Routes (Admin Authentication Required)

| Route                       | Method | Purpose            | Response                |
| --------------------------- | ------ | ------------------ | ----------------------- |
| `/admin`                    | `GET`  | Admin dashboard    | Admin dashboard page    |
| `/admin/products`           | `GET`  | Product management | Product management page |
| `/admin/add-product`        | `POST` | Add new product    | New product creation    |
| `/admin/edit-product/:id`   | `POST` | Edit product       | Product update          |
| `/admin/delete-product/:id` | `POST` | Delete product     | Product deletion        |
| `/admin/orders`             | `GET`  | Manage orders      | Orders management page  |

### Special Routes

| Route        | Method | Purpose                   | Status              |
| ------------ | ------ | ------------------------- | ------------------- |
| `/not-admin` | `GET`  | Access denied (non-admin) | 403 Forbidden       |
| `/error`     | `GET`  | Error handler             | 500 Internal Server |

## 🔄 Project Workflow

### Request-Response Lifecycle

```
┌─────────────────────────────────────────────────────────────┐
│                    Client Browser Request                    │
└────────────────────────┬────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│  1️⃣  Express Middleware Layer                               │
│     - Parse request body (body-parser)                      │
│     - Load session (express-session)                        │
│     - Initialize flash messages (connect-flash)            │
└────────────────────────┬────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│  2️⃣  Route Matching                                         │
│     - Find matching route from routes/ directory           │
│     - Load route handler                                    │
└────────────────────────┬────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│  3️⃣  Authentication Guards                                  │
│     - Check session (auth.guard.js)                         │
│     - Verify admin role if needed (admin.guard.js)         │
│     - Redirect if unauthorized                             │
└────────────────────────┬────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│  4️⃣  Controller Logic                                       │
│     - Execute business logic from controllers/              │
│     - Validate input data                                   │
│     - Prepare data for model layer                         │
└────────────────────────┬────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│  5️⃣  Model Interaction                                      │
│     - MongoDB operations (models/)                          │
│     - CRUD operations via Mongoose                         │
│     - Data validation & storage                            │
└────────────────────────┬────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│  6️⃣  Response Preparation                                   │
│     - Format response data                                  │
│     - Set flash messages if needed                         │
│     - Prepare variables for view                           │
└────────────────────────┬────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│  7️⃣  View Rendering                                         │
│     - EJS template rendering (views/)                       │
│     - Component inclusion (views/parts/)                    │
│     - Bootstrap styling applied                            │
└────────────────────────┬────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│  8️⃣  Error Handling                                         │
│     - Catch errors at any stage                             │
│     - Redirect to /error page                              │
│     - Log error information                                │
└────────────────────────┬────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│           HTML Response Sent to Browser                     │
└─────────────────────────────────────────────────────────────┘
```

### Key Components in the Flow

| Component       | File Location    | Role                        |
| --------------- | ---------------- | --------------------------- |
| **Middleware**  | `app.js`         | Processes all requests      |
| **Routes**      | `routes/`        | Maps URLs to handlers       |
| **Guards**      | `routes/guards/` | Validates authentication    |
| **Controllers** | `controllers/`   | Executes business logic     |
| **Models**      | `models/`        | Manages database operations |
| **Views**       | `views/`         | Renders HTML responses      |

## 🤝 Contributing

We welcome contributions! Follow these steps to contribute:

### Development Setup

1. **Create a feature branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes:**

   - Write clean, readable code
   - Follow existing code style
   - Add comments for complex logic
   - Test your changes thoroughly

3. **Commit with descriptive messages:**

   ```bash
   git commit -m 'feat: Add your feature description'
   ```

4. **Push to your branch:**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request:**
   - Describe changes in detail
   - Reference any related issues
   - Request review from maintainers

### Code Guidelines

- Follow Node.js best practices
- Use consistent naming conventions
- Keep functions small and focused
- Add error handling for all operations
- Write meaningful variable names

---

## 📄 License

This project is licensed under the **ISC License**.

```
ISC License

Copyright (c) 2025 Mohamed Lamine OULAD SAID

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.
```

For full details, see the `LICENSE` file or `package.json`.

---

## 👤 Author

**Mohamed Lamine OULAD SAID**

- 📧 Email: [your-email@example.com]
- 💼 LinkedIn: [your-linkedin-profile]
- 🐙 GitHub: [your-github-profile]

---

## 📊 Project Information

| Detail              | Value              |
| ------------------- | ------------------ |
| **Project Name**    | Online Shop        |
| **Version**         | 1.0.0              |
| **Status**          | Active Development |
| **Last Updated**    | November 2025      |
| **License**         | ISC                |
| **Node Version**    | 14+                |
| **MongoDB Version** | 4.4+               |

---

## 🙋 Support & Contact

For questions, bug reports, or feature requests:

- 📝 Create an issue on GitHub
- 📧 Send an email to the author
- 💬 Open a discussion for general questions

---

<div align="center">

**Built with ❤️ using Node.js, Express, and MongoDB**

</div>
