import PropTypes from 'prop-types'
import { FaCalendar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LeftNavNews = ({ news }) => {

  const { _id, image_url, title, author } = news;

  const publishDate = new Date(`${author.published_date} UTC`);

  return (
    <Link to={`/news/${_id}`} className='card'>
      <img className='w-full h-40 rounded-md' src={image_url} alt={title} />
      <h2 className='text-xl font-semibold my-5'>{title}</h2>
      <p className='flex justify-between items-center font-semibold'>
        <span>Category</span>
        <span className='flex gap-1 items-center text-gray-400'>
          <FaCalendar></FaCalendar> {publishDate.toDateString()}
        </span>
      </p>
    </Link>
  )
}

export default LeftNavNews
LeftNavNews.propTypes = {
  news: PropTypes.object
}