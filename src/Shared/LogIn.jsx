import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const LogIn = () => {
    const {handleLogin} = useContext(AuthContext)
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
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <form onSubmit={createLogin}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img className="h-96 border rounded-lg" src="https://static.vecteezy.com/system/resources/previews/005/879/539/original/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
            <div className="card-body">
                <h1 className="text-center font-bold text-4xl text-black">LOGIN</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-black text-xl">Email</span>
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
                  <span className="label-text font-semibold text-black text-xl">Password</span>
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
                        className="label-text-alt link link-hover underline  font-semibold text-black text-xl"
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
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LogIn;
