import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Registration = () => {
  const { handleSignUp } = useContext(AuthContext);
  // const navigate = useNavigate();
  const [error, setError] = useState("");

  const createSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    setError("");
    if (password.length < 6) {
      setError("password must be 6 characters or longer");
      return;
    }

    handleSignUp(email, password)
      .then((result) => {
        const createUser = result.user;
        console.log(createUser);
        handleUpdate(createUser, name, photo);
        form.reset();
        // navigate("/");
        form.reset();
      })
      .then((error) => {
        console.error(error);
      });
  };
  const handleUpdate = (createUser, name, photoUrl) => {
    updateProfile(createUser, { displayName: name, photoURL: photoUrl })
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="container">
      <div className="login-form mx-auto rounded-3 shadow-lg">
        <form onSubmit={createSignUp}>
          <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
              <div className="text-center lg:text-left w-1/2">
                <img
                  className=""
                  src="https://img.freepik.com/premium-vector/create-new-account-concept-illustration_269560-19.jpg?w=2000"
                  alt=""
                />
              </div>
              <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-pink-400 w-1/2">
                <div className="card-body">
                  <h1 className="text-center font-bold text-4xl text-black">REGISTRATION</h1>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold text-black text-xl">
                        Name
                      </span>
                    </label>
                    <input
                      type="name"
                      name="name"
                      placeholder="Please Enter Your Name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  font-bold text-black text-xl">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Please Enter Your Email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  font-bold text-black text-xl">
                        Password
                      </span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Please Enter Your Password"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  font-bold text-black text-xl">
                        Photo Url
                      </span>
                    </label>
                    <input
                      type="photo"
                      name="photo"
                      placeholder="photo url"
                      className="input input-bordered"
                    />
                   
                  </div>
                  <p className='text-center text-xl'><small className="text-lime-800 font-semibold">Already Have an Account? <Link to='/login' className='text-red-600  '>LogIn Please</Link> </small></p>
                  <div className="form-control mt-6">
                    <input
                      type="submit"
                      value="Sign Up"
                      className="btn btn-primary"
                    ></input>
                  </div>
                </div>
                
              </div>
              
            </div>
           
          </div>
          
        </form>
        <p className="text-danger">{error}</p>
      </div>
    </div>
  );
};

export default Registration;
