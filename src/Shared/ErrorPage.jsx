import { Link } from "react-router-dom";
import Error from "../assets/404.png";

const ErrorPage = () => {
  return (
    <div className="container mx-auto p-3">
      <section className=" d-flex align-items-center">
        <div className="fs-1 text-center mx-auto text-2xl font-semibold bg-gray-600 mt-10 p-5 rounded-lg mb-10">
          <h1 className="mb-5 text-red-700 italic ">
            Page Not Found!
          </h1>
          <Link className="btn btn-warning mb-5 underline" to="/" >GO BACK!</Link>
        </div>
        <div className=" mt-10 ">
          <img className="mx-auto h-96 w-full rounded-lg" src={Error} alt="" />
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
