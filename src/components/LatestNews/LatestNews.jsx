import Marquee from "react-fast-marquee"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

const LatestNews = ({ latestHeadLines }) => {
  return (
    <div className="bg-gray-100 p-4 flex my-8">
      <button className="bg-latestNews rounded-none text-white font-medium text-xl px-6 py-2">Latest</button>
      <Marquee pauseOnHover={true} speed={100} style={{ fontSize: "18px", fontWeight: 600 }}>
        {
          latestHeadLines?.map(latestHeadLine => <div className="flex items-center" key={latestHeadLine._id}><Link to={`/news/${latestHeadLine._id}`}><p className="hover:text-orange-500">{latestHeadLine.title}</p></Link><span className="mx-3 text-gray-400">||</span></div>)
        }
      </Marquee>
    </div>
  )
}

export default LatestNews

LatestNews.propTypes = {
  latestHeadLines: PropTypes.array
}