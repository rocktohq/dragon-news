import Marquee from "react-fast-marquee"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

const LatestNews = ({ latestHeadLines }) => {
  return (
    <div className="bg-gray-100 p-4 flex my-8">
      <button className="bg-latestNews rounded-none text-white font-medium text-xl px-6 py-2">Latest</button>
      <Marquee pauseOnHover={true} speed={100} style={{ fontSize: "18px", fontWeight: 600 }}>
        {
          latestHeadLines.map(latestHeadLine => <Link to={`/news/${latestHeadLine._id}`} key={latestHeadLine._id}><p className="mx-1">{latestHeadLine.title}</p></Link>)
        }
      </Marquee>
    </div>
  )
}

export default LatestNews

LatestNews.propTypes = {
  latestHeadLines: PropTypes.array
}