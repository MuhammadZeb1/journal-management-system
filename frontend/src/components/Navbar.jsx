import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-slate-800 px-10 text-white">
      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold">
          MyApp
        </Link>
      </div>

      {/* Menu */}
      <div className="flex-none">
        <ul className="menu menu-horizontal gap-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/request-expert">Request Expert</Link></li>
          <li>
            <Link to="/admin-approve" className="btn btn-sm btn-primary">
              Admin Panel
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
