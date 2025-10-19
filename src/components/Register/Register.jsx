// import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router";
// import auth from "../../firebase/firebase.init";
import AuthContext from "../../contexts/AuthContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  //   const handleRegister = (event) => {
  //     event.preventDefault();
  //     const email = event.target.email.value;
  //     const password = event.target.password.value;
  //     console.log(email, password);

  //     createUserWithEmailAndPassword(auth, email, password)
  //       .then((userCredential) => {
  //         // Signed in
  //         const user = userCredential.user;
  //         console.log("User registered:", user);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  const handleRegister = (event) => {
    event.preventDefault();
    // const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User registered:", user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="text" className="input" placeholder="Name" name="name" />
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" name="email" />
                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" name="password" />
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
            <div>
              <p>
                Already have an account?{" "}
                <Link to="/login" className="link link-hover text-blue-500">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
