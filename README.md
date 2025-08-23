# Next Mart

**Next Mart** is a modern e-commerce platform built with **Next.js 15**, **MongoDB**, **NextAuth.js**, and **Tailwind CSS / DaisyUI**. Users can browse products, add products (if logged in), and manage their own products. Authentication is handled via Google OAuth.

👉 [Next Mart Live](https://next-mart-sage.vercel.app)

---

# Setup & Installation

1. **Clone the repository**

```bash
git clone https://github.com/sajjadsajux/next-mart.git
cd next-mart
```

# Install dependencies

npm install

# Set up environment variables

## Create a .env.local file in the root:

- MONGODB_URI=your_mongodb_connection_string
- GOOGLE_CLIENT_ID=your_google_client_id
- GOOGLE_CLIENT_SECRET=your_google_client_secret
- NEXTAUTH_URL=http://localhost:3000/
- NEXTAUTH_SECRET=your_NEXTAUTH_SECRET

# Run the development server

npm run dev
The app will be available at http://localhost:3000

# Build for production

npm run build
npm start

# Route Summary

| Route                    | Description                      |
| ------------------------ | -------------------------------- |
| `/`                      | Home page with featured products |
| `/products`              | All products page                |
| `/products/[id]`         | Product details page             |
| `/login`                 | Google login page                |
| `/dashboard/add-product` | Add new product (requires login) |
| `/dashboard/my-products` | List of user's products          |
| `/about`                 | About NEXT Mart                  |
| `/contact`               | Contact page                     |
| `/privacy`               | Privacy Policy                   |
| `/terms`                 | Terms of Service                 |
| `*`                      | Custom 404 / Not Found page      |

# Features

- Seamless Google Login – Secure one-click authentication using Google OAuth.

- Smart Product Management – Store and manage products effortlessly with MongoDB

- Modern UI/UX – Fully responsive interface built with Tailwind CSS for a clean and consistent experience

- Rich Product Details – Add products with images, categories, stock levels, and uploader information

- Dynamic Highlights – Showcase latest uploaded products on the homepage in real time
- Robust Error Handling – Custom error and loading pages for a smooth user journey

> This project is still in progress, and I’m always open to new ideas.
> 💡 If you have any suggestions or feedback on how I can improve Next Mart, feel free to share!
