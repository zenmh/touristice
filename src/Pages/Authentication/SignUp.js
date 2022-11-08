import { Button } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Img from "../../assets/signup.webp";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const { createUser, updataUserProfile } = useContext(AuthContext);
  const [agree, setAgree] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photo_url.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        updateUserInfo(name, photoUrl);
        form.reset();
      })
      .catch((err) => console.error("Error", err));
  };

  const updateUserInfo = (name, photoUrl) => {
    updataUserProfile({ displayName: name, photoURL: photoUrl })
      .then(() => {})
      .catch((err) => console.error("Error", err));
  };

  const handleCheakbox = (e) => {
    setAgree(e.target.checked);
  };
  return (
    <div className="mx-60 grid grid-cols-2">
      <div>
        <h2 className="font-bold text-3xl">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="my-6 w-full"
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <br />
          <input
            className="my-6 w-full"
            type="text"
            name="photo_url"
            placeholder="Image URL"
          />
          <br />
          <input
            className="my-6 w-full"
            type="email"
            name="email"
            placeholder="Enter E-mail"
          />
          <br />
          <input
            className="my-6 w-full"
            type="password"
            name="password"
            placeholder="Password"
          />
          <br />
          <hr className="mb-4 border-2 border-b-black" size="100" />
          <div className="flex justify-between">
            <div className="flex items-center">
              <input type="checkbox" name="checkbox" onClick={handleCheakbox} />
              <p className="ml-2">
                I agree all statements in <Link>Terms of service</Link>
              </p>
            </div>
            <br />
            <Button type="submit" gradientMonochrome="teal" disabled={!agree}>
              Sign Up
            </Button>
          </div>
        </form>
      </div>
      <div>
        <img src={Img} alt="" />
        <p className="font-semibold">
          <Link to="/login">I have already an account</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
