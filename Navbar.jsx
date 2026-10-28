
function Navbar() {
  return (
    <nav className="flex justify-between p-4">
      <h1
        className="text-3xl font-bold tracking-tight text-gray-900"
        style={{ fontFamily: "cursive" }}
      >
        Instagram
      </h1>
      <div className="flex gap-8">
        <a href="#">Home</a>
        <a href="#">Explore</a>
        <button className="bg-blue-500 text-white px-3 py-1">
          Log In
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

