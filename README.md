
# **Shopease - E-Commerce Application**

Shopease is an e-commerce web application that allows users to browse products, add them to the cart, and proceed with payment via the billing page. It automatically creates a MongoDB database locally using MongoDB Compass for storing user data and products.

## **Tech Stack**
- **Frontend**: [Vite](https://vitejs.dev/), React.js, Tailwind CSS
- **Backend**: Flask
- **Database**: MongoDB (Local - MongoDB Compass)
- **State Management**: React Context API
- **HTTP Requests**: Axios

---

## **Features**
- **Product Catalog**: Browse products dynamically using a search bar. Products can be added to the cart.
- **Shopping Cart**: Add items to your cart, view prices, and proceed to checkout.
- **Billing System**: Allows payment selection and processes the payment, then clears the cart and shows a confirmation message.
- **Responsive Design**: Mobile-friendly and fully responsive.

---

## **Getting Started**

Follow these steps to set up the Shopease project locally.

### **Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Python](https://www.python.org/) (for Flask backend)
- [MongoDB Compass](https://www.mongodb.com/products/compass) (for local database management)

### **Installation**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/shopease.git
   cd shopease
   ```

2. **Frontend Setup**
   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

3. **Backend Setup**
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Create and activate a virtual environment:
     ```bash
     python -m venv venv
     source venv/bin/activate  # On Windows: venv\Scripts\activate
     ```
   - Install dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Start the Flask server:
     ```bash
     python app.py
     ```

4. **MongoDB Setup**
   - Make sure MongoDB Compass is installed and running.
   - The application will automatically create a database for you in MongoDB Compass at `localhost:27017` (default MongoDB connection).
   - The collections for products and cart data will be automatically managed through the app.

---

## **Folder Structure**
```
shopease/
├── backend/          # Flask backend code
│   ├── app.py        # Main application file
│   ├── routes/       # API endpoints for products and cart
│   ├── models/       # MongoDB models
│   └── requirements.txt
├── frontend/         # React frontend code
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx   # Main frontend entry point
└── README.md
```

---

## **Usage**

1. **Run the Backend**
   - Start the Flask backend server:
     ```bash
     cd backend
     python app.py
     ```

2. **Run the Frontend**
   - Start the Vite development server:
     ```bash
     cd frontend
     npm run dev
     ```

3. **Access the Application**
   - Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## **Screenshots**

### **Product Catalog**
![Product Catalog](public/Screenshot%202024-12-05%20175309.png)

### **Shopping Cart**
![Shopping Cart](https://via.placeholder.com/800x400?text=Shopping+Cart)

### **Billing Page**
![Billing Page](https://via.placeholder.com/800x400?text=Billing+Page)

---

## **API Endpoints**
| Method | Endpoint           | Description                |
|--------|--------------------|----------------------------|
| GET    | `/api/products`    | Fetch all products         |
| POST   | `/api/cart`        | Add items to cart          |
| POST   | `/api/checkout`    | Process billing and payment|

---

## **Contributing**
We welcome contributions! To contribute:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---

## **License**
This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## **Contact**
For questions or feedback, feel free to reach out:
**Your Name**  
- Email: your-email@example.com  
- GitHub: [your-username](https://github.com/your-username)

---
