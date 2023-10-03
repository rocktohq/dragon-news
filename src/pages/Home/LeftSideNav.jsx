import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import LeftNavNews from "./LeftNavNews";

const LeftSideNav = () => {

  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  useEffect(() => {
    fetch("/news.json")
      .then(res => res.json())
      .then(data => setNews(data))
  }, [])

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-600">All Categories</h2>
      <ul>
        {
          categories && categories.map(category => <li key={category.id}><Link to={`/category/${category.id}`}><button className="btn btn-ghost rounded capitalize text-xl font-medium text-gray-500">{category.name}</button></Link></li>
          )
        }
      </ul>
      <div className="space-y-4">
        {
          news && news.slice(0, 3).map(slicedNews => <LeftNavNews key={slicedNews._id} news={slicedNews}></LeftNavNews>)
        }
      </div>
    </div>
  )
}

export default LeftSideNav
