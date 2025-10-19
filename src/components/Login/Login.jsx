import React, { useContext } from "react";
import { Link } from "react-router";
import AuthContext from "../../contexts/AuthContext";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    signInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User logged in:", user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" name="email" />
                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" name="password" />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
            <div>
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="link link-hover text-blue-500">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
