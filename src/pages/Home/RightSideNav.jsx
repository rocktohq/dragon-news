import { Link } from "react-router-dom"
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa"
import qZone1 from "../../assets/qZone1.png"
import qZone2 from "../../assets/qZone2.png"
import qZone3 from "../../assets/qZone3.png"
import bg1 from "/bg1.png"
import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import toast from "react-hot-toast"

const RightSideNav = () => {
  const { user, googleLogin, githubLogin } = useContext(AuthContext);

  const handleSocialLogin = (media) => {
    try {
      toast.loading("Login in Process...");
      media()
        .then(() => {
          toast.dismiss();
          toast.success("Login Success")
        })
        .catch(error => {
          toast.dismiss();
          toast.error(error.message);
          console.error(error.message)
        })
    }
    catch (error) {
      toast.dismiss();
      toast.error(error);
      console.error(error);
    }
  }

  return (
    <div>
      {
        !user && <div>
          <h2 className="text-xl font-semibold text-gray-600">Login With</h2>
          <div className="space-y-2 mt-5">
            <button onClick={() => handleSocialLogin(googleLogin)} className="btn btn-outline btn-info rounded w-full"><FaGoogle /> Google</button>
            <button onClick={() => handleSocialLogin(githubLogin)} className="btn btn-outline btn-black rounded w-full"><FaGithub /> Github</button>
          </div>
        </div>
      }
      <div>
        <h2 className="text-xl font-semibold text-gray-600 mt-7 mb-5">Find Us On</h2>
        <div className="border rounded-md space-y-3">
          <Link className="flex items-center gap-2 p-4">
            <span className="bg-gray-200 rounded-full p-2"><FaFacebook /></span> <span className="font-medium">Facebook</span>
          </Link>
          <hr />
          <Link className="flex items-center gap-2 p-4">
            <span className="bg-gray-200 rounded-full p-2"><FaTwitter /></span> <span className="font-medium">Twitter</span>
          </Link>
          <hr />
          <Link className="flex items-center gap-2 p-4">
            <span className="bg-gray-200 rounded-full p-2"><FaInstagram /></span> <span className="font-medium">Instagram</span>
          </Link>
        </div>
      </div>
      <div className="bg-gray-100 mt-7 py-4 px-2">
        <h2 className="text-xl font-semibold text-gray-600 px-2">Q-Zone</h2>
        <div className="mt-8">
          <img className="w-full" src={qZone1} alt="qZone 1" />
          <img className="w-full" src={qZone2} alt="qZone 2" />
          <img className="w-full" src={qZone3} alt="qZone 3" />
        </div>
      </div>
      <div className="text-center relative mt-7">
        <figure className="bg-black">
          <img className="w-full h-fit opacity-40" src={bg1} alt="" />
        </figure>
        <div className="absolute top-1/4 left-0 text-white p-8">
          <h2 className="text-3xl font-bold">Create an Amazing Newspaper</h2>
          <p className="mt-5 mb-8">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
          <button className="btn btn-error text-white rounded-none">Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default RightSideNav
