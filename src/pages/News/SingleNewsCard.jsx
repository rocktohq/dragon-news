import PropTypes from 'prop-types'

const SingleNewsCard = ({ singleNews }) => {

  const { title, image_url, details } = singleNews;

  return (
    <div className="space-y-4">
      <img src={image_url} alt="" />
      <h2 className='text-xl font-bold'>{title}</h2>
      <p className="text-gray-500">{details}</p>
    </div>
  )
}

export default SingleNewsCard

SingleNewsCard.propTypes = {
  singleNews: PropTypes.object
}