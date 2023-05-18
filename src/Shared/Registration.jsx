import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Registration = () => {
    const {handleSignUp } = useContext(AuthContext)
    const createSignUp = (event) =>{
        event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name,email,password,photo);
    handleSignUp(email, password)
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
     
      form.reset();
    })
    .then((error) => {
      console.error(error);
    });
    }
   
    
    return (
        <form onSubmit={createSignUp}>
             <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Registration now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name ="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name ="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                    name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="photo"
                    name="photo"
                  placeholder="photo url"
                  className="input input-bordered"
                />
        
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Sign Up" className="btn btn-primary"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
        </form>
    );
};

export default Registration;