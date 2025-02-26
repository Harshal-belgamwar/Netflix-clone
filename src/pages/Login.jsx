import logo from "../assets/logo.png";
import bground from "../assets/background_banner.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {login,signup} from "../Firebase";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../Firebase";
import netflix_spinner from "../assets/netflix_spinner.gif"

const Login = () => {
    const [signState,setSignState]=useState("Sign Up");
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const[loading,setLoading]=useState(false);

    const navigate=useNavigate();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("Logged In");
        } else {
          console.log("Logged Out");
        }
      });

      return () => unsubscribe(); 
    }, []);

    const user_auth = async (e) => {
      e.preventDefault(); 
      setLoading(true);
      try {
        if (signState === "Sign In") {
          await login(email, password);
          navigate("/");
          alert("Login Successful");
        } else {
          await signup(name, email, password);
          alert("Signup UnSuccessful");
          setSignState("Sign In");
        }
      } catch (error) {
        alert(error.message);
      }
      setLoading(false);
    };

  return (
    loading ? (
      <div className="w-full h-screen flex justify-center items-center">
        <img src={netflix_spinner} alt="Loading..." />
      </div>
    ) : (
      <div className="login text-white flex items-center justify-center min-h-screen px-4 relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={bground} alt="hero" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
        </div>

        {/* Logo Positioned at Top Left */}
        <img src={logo} alt="logo" className="absolute top-5 left-5 w-36 sm:w-48 z-50" />


        {/* Form Container */}
        <div className="Login-form w-full max-w-md bg-black/50 border-2 border-red-400 p-6 rounded-md relative z-50">
          <form className="relative flex flex-col gap-6">
            <h1 className="text-red-600 text-3xl sm:text-4xl font-bold flex justify-center ">
              {signState}
            </h1>

            {signState === "Sign Up" && (
              <input
                type="text"
                placeholder="UserName"
                className="border-2 border-red-400 rounded-md w-full h-12 p-2 text-base sm:h-14 sm:text-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}

            <input
              type="email"
              placeholder="Email"
              className="border-2 border-red-400 rounded-md w-full h-12 p-2 text-base sm:h-14 sm:text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="border-2 border-red-400 rounded-md w-full h-12 p-2 text-base sm:h-14 sm:text-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="bg-red-500 w-full py-3 text-lg font-bold rounded-md"
              onClick={user_auth}
            >
              {signState}
            </button>

            <div className="form-help flex flex-row justify-between text-sm">
              <div className="remember flex items-center space-x-1">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <span className="hover:text-blue-600 cursor-pointer">
                Need Help?
              </span>
            </div>

            <div className="form-footer text-center">
              {signState === "Sign In" ? (
                <p onClick={() => setSignState("Sign Up")}>
                  New to Netflix? <span className="text-blue-500 cursor-pointer">Sign Up Now</span>
                </p>
              ) : (
                <p onClick={() => setSignState("Sign In")}>
                  Already have an account? <span className="text-blue-500 cursor-pointer">Sign In Now</span>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Login;
