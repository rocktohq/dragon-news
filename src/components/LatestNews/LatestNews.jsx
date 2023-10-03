import Marquee from "react-fast-marquee"

const LatestNews = () => {
  return (
    <div className="bg-gray-100 p-4 flex">
      <button className="btn btn-error rounded-none text-white">Latest</button>
      <Marquee pauseOnHover={true} speed={100}>
        <p className="text-red-400 mx-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, nihil?</p>
        <p className="text-cyan-400 mx-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, nihil?</p>
        <p className="text-gray-400 mx-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, nihil?</p>
        <p className="text-orange-400 mx-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, nihil?</p>
      </Marquee>
    </div>
  )
}

export default LatestNews