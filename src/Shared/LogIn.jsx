import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";

const LogIn = () => {
  const { handleLogin, googleLogin } = useContext(AuthContext);
  // console.log(handleLogin);
  const googleProvider = new GoogleAuthProvider();
  const [error, setError] = useState("");
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const createLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    handleLogin(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        setError("")
        navigate(from ,{replace:true});
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        setError("")
        console.log(loggedUser);
        // location("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form onSubmit={createLogin}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img
              className="h-96 border rounded-lg"
              src="https://static.vecteezy.com/system/resources/previews/005/879/539/original/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
            <div className="card-body">
              <h1 className="text-center font-bold text-4xl text-black">
                LOGIN
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-black text-xl">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-black text-xl">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover  font-semibold text-black text-xl"
                >
                  Forgot password?
                </a>
              </label>
           
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="login"
                  className="btn btn-primary"
                ></input>
              </div>
              <p className="mt-3 text-center font-semibold text-green-600">
                <Link to="/signup"> Don't have an account? Sign Up </Link>
              </p>
              <div className="mt-3 text-center">
                <button
                  onClick={handleGoogleLogin}
                  className=" text-red-500 py-1 px-2 rounded-lg me-3"
                >
                  <FaGoogle></FaGoogle>
                </button>
              </div>
             
              <p className="text-red-800">{error}</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LogIn;
