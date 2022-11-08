import { Button } from "flowbite-react";
import React, { useContext } from "react";
import Img from "../../assets/signup.webp";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { login, providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
        form.reset();
      })
      .catch((err) => console.error("Error", err));
  };

  const googleLogin = () => {
    providerLogin(googleProvider)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
      })
      .catch((err) => console.error("Error", err));
  };

  return (
    <div className="grid grid-cols-2 mx-60">
      <div>
        <img src={Img} alt="" />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-10">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="w-full my-4"
            type="email"
            name="email"
            placeholder="Enter E-mail"
          />
          <input
            className="w-full my-4"
            type="password"
            name="password"
            placeholder="Password"
          />
          <hr className="my-4" />
          <Button type="submit" gradientMonochrome="teal">
            Sign In
          </Button>
        </form>
        <hr className="my-4" />
        <div className="flex justify-center mt-10">
          <Link
            onClick={googleLogin}
            className="flex justify-center items-center border-2 border-sky-400 bg-sky-100 hover:bg-sky-200 px-3 rounded-2xl"
          >
            <FcGoogle className="text-2xl" />
            <p className="font-bold ml-1">Continue With Google</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
