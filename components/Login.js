import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();
  
  return (
    <button className="btn" onClick={authenticate}>
      Login
    </button>
  );
}

export default Login;
