import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
import { BsEyeFill, BsShareFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const NewsCard = ({ news }) => {

  const { _id, title, author, image_url, details, rating: newsRating, total_view } = news;

  return (
    <div className='border rounded'>
      <div className='bg-gray-100 flex justify-between items-center p-3'>
        <div className='flex items-center gap-2'>
          <img className='h-10 w-10 rounded-full' src={author.img} alt="" />
          <div>
            <p className='font-semibold'>{author.name}</p>
            <p className='text-sm text-gray-500'>{author.published_date}</p>
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <FaBookmark></FaBookmark>
          <BsShareFill></BsShareFill>
        </div>
      </div>
      <div className='p-5 space-y-3'>
        <h2 className='text-xl font-bold'>{title}</h2>
        <img src={image_url} alt={title} />
        <p className='text-gray-500'>{
          details.length > 200
            ? details.slice(0, 200)
            : details
        }...</p>
        <Link to={`/news/${_id}`} className='font-bold text-orange-500'>Read More</Link>
        <hr />
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <StarRatings
              rating={newsRating.number}
              starDimension="20px"
              starSpacing="1px"
              starRatedColor="#fc7914"
            /> <p className='font-medium'>{newsRating.number}</p>
          </div>
          <p className='flex gap-2 items-center'>
            <BsEyeFill></BsEyeFill><span>{total_view}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NewsCard

NewsCard.propTypes = {
  news: PropTypes.object
}