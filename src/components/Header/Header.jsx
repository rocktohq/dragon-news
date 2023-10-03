import moment from "moment";
import Logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto" src={Logo} alt="Dragon News Logo" />
      <p className="text-lg text-gray-500 mt-5 mb-2">Journalism Without Fear or Favour</p>
      <p className="text-gray-500 text-xl font-medium"><span className="text-gray-800">{moment().format('dddd,')}</span> {moment().format('MMMM D, YYYY')}</p>
    </div>
  )
}

export default Header
