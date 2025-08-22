# Next Mart

**Next Mart** is a modern e-commerce platform built with **Next.js 15**, **MongoDB**, **NextAuth.js**, and **Tailwind CSS / DaisyUI**. Users can browse products, add products (if logged in), and manage their own products. Authentication is handled via Google OAuth.

---

## Setup & Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/next-mart.git
cd next-mart
```

Install dependencies

npm install

Set up environment variables

Create a .env.local file in the root:

MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_URL=http://localhost:3000
