import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Register = () => {

  const { createUser, profileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    // User Data from Form
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const confirmPassword = form.get("password2");
    const checked = form.get("terms");

    // Validation
    if (name === "" && photo === "" && email === "" && password === "" && confirmPassword === "") {
      toast.error("All fields are required!");
      return;
    } else if (name === "") {
      toast.error("Please provide your name!");
      return;
    } else if (photo === "") {
      toast.error("Please provide your photo URL!");
      return;
    } else if (!/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/.test(photo)) {
      return toast.error("Please provide valid photo URL!");
    } else if (email === "") {
      toast.error("Please provide your email!");
      return;
    } else if (password === "") {
      toast.error("Password is required!");
      return;
    } else if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must have an uppercase letter!");
      return;
    } else if (confirmPassword === "") {
      toast.error("Confirm password is required!");
      return;
    } else if (password !== confirmPassword) {
      return toast.error("Password didn't match!")
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      toast.error("Please provide an valid email!");
      return;
    } else if (!checked) {
      toast.error("Terms and conditions must be accepted!");
      return;
    }

    // Registering User
    // Loading
    toast.loading("Registering User...");
    createUser(email, password)
      .then(() => {
        profileUpdate(name, photo)
          .then(() => {
            toast.dismiss();
            toast.success("Registration Successfull");
            navigate("/");
          })
          .catch(error => {
            toast.dismiss();
            toast.error(error.message);
            console.error(error.message);
          })
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
        <title>Dragon News - Register</title>
      </Helmet>
      <section className="max-w-screen-md mx-auto shadow-md rounded-md my-12 p-5">
        <h2 className="text-4xl font-bold text-center">Please Register</h2>
        <form onSubmit={handleRegister}>
          <div className="md:w-3/4 lg:2/3 mx-auto space-y-3 mt-5">
            <input className="input border-gray-400 focus:outline-none rounded w-full" type="text" name="name" placeholder="Full Name" />
            <input className="input border-gray-400 focus:outline-none rounded w-full" type="text" name="photo" placeholder="Photo URL" />
            <input className="input border-gray-400 focus:outline-none rounded w-full" type="email" name="email" placeholder="example@email.com" />
            <input className="input border-gray-400 focus:outline-none rounded w-full" type="password" name="password" placeholder="Password" />
            <input className="input border-gray-400 focus:outline-none rounded w-full" type="password" name="password2" placeholder="Confirm Password" />
            <input type="checkbox" name="terms" id="terms" className="mr-2" />
            <label htmlFor="terms" className="font-medium">Accept Terms and Conditions</label>
            <button className="btn btn-neutral w-full rounded text-white">Register</button>
          </div>
        </form>
        <div className="md:w-3/4 lg:2/3 mx-auto space-y-3 mt-5">
          <p className="mx-auto">- Already have an account? <Link to="/login"><span className="text-blue-500">Login here.</span></Link></p>
        </div >
      </section >
    </HelmetProvider>
  )
}

export default Register
