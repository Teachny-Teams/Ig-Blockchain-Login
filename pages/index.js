import { useMoralis } from "react-moralis";
import Login from "../components/Login";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  return (
    <div
      className="container"
    >
      {!isAuthenticated ? (
        <Login />
      ) : (
        <button
          className="btn"
          onClick={logout}
        >
          Logout
        </button>
      )}
    </div>
  );
}
