import { Link } from "react-router-dom"
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa"
import qZone1 from "../../assets/qZone1.png"
import qZone2 from "../../assets/qZone2.png"
import qZone3 from "../../assets/qZone3.png"

const RightSideNav = () => {
  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold text-gray-600">Login With</h2>
        <div className="space-y-2 mt-5">
          <button className="btn btn-outline btn-info rounded w-full"><FaGoogle /> Login with Google</button>
          <button className="btn btn-outline btn-black rounded w-full"><FaGithub /> Login with Github</button>
        </div>
      </div>
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
    </div>
  )
}

export default RightSideNav
