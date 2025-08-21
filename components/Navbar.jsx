export default function Navbar() {
  return (
    <nav className="bg-gray-100 p-4 flex justify-between">
      <a href="/" className="font-bold">
        Home
      </a>
      <div className="space-x-4">
        <a href="/products">Products</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
}
