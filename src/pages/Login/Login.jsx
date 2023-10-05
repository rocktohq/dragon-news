import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Login = () => {

  const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (event) => {
    event.preventDefault();

    // Data from User
    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // Validation
    if (email === "") {
      toast.error("Email field can not be empty!");
      return;
    }
    else if (password === "") {
      toast.error("Password field can not be empty!");
      return;
    }

    // Login User
    // Loading
    toast.loading("Login in Process...");

    loginUser(email, password)
      .then(() => {
        toast.dismiss();
        toast.success("Login Success!");

        // Navigate after Login
        location.state
          ? navigate(location.state)
          : navigate("/")
      })
      .catch(error => {
        toast.dismiss();
        toast.error(error.message);
        console.error(error.message);
      })
  }


  const handleSocialLogin = (media) => {
    toast.loading("Login in Process...");
    media()
      .then(() => {
        toast.dismiss();
        toast.success("Login Success");

        // Navigate after Login
        location.state
          ? navigate(location.state)
          : navigate("/")
      })
      .catch(error => {
        toast.dismiss();
        toast.error(error.message);
        console.error(error.message)
      })
  }
  return (
    <HelmetProvider>
      <Helmet>
        <title>Dragon News - Login</title>
      </Helmet>
      <section className="max-w-screen-md mx-auto shadow-md rounded-md my-12 p-5">
        <h2 className="text-4xl font-bold text-center">Please Login</h2>
        <form onSubmit={handleLogin}>
          <div className="md:w-3/4 lg:2/3 mx-auto space-y-3 mt-5">
            <input className="input border-gray-400 focus:outline-none rounded w-full" type="email" name="email" placeholder="example@email.com" />
            <input className="input border-gray-400 focus:outline-none rounded w-full" type="password" name="password" placeholder="Password" />
            <button className="btn btn-neutral w-full rounded text-white">Login</button>
          </div>
        </form>
        <div className="md:w-3/4 lg:2/3 mx-auto mt-3 flex flex-col md:flex-row gap-2">
          <button onClick={() => handleSocialLogin(googleLogin)} className="btn btn-outline btn-info md:w-1/2 rounded"><FaGoogle /> Login with Google</button>
          <button onClick={() => handleSocialLogin(githubLogin)} className="btn btn-outline btn-secondary md:w-1/2 rounded"><FaGithub /> Login with GitHub</button>
        </div>
        <div className="md:w-3/4 lg:2/3 mx-auto space-y-3 mt-5">
          <p className="mx-auto">- Need an account? <Link to="/register"><span className="text-blue-500">Register here.</span></Link></p>
        </div >
      </section >
    </HelmetProvider>
  )
}

export default Login
