import { useLoaderData } from "react-router-dom"
import Header from "../../components/Header/Header"
import LatestNews from "../../components/LatestNews/LatestNews"
import Navbar from "../../components/Navbar/Navbar"
import LeftSideNav from "./LeftSideNav"
import RightSideNav from "./RightSideNav"
import NewsCard from "./NewsCard"

const Home = () => {

  const allNews = useLoaderData();

  return (
    <>
      <header className="max-w-screen-xl mx-auto px-3 mt-12 mb-20">
        <Header></Header>
        <LatestNews></LatestNews>
        <Navbar></Navbar>
      </header>
      <main className="max-w-screen-xl mx-auto px-3 mb-12">
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <LeftSideNav></LeftSideNav>
          <div className="col-span-2">
            <h2 className="text-xl font-semibold text-gray-600">Dragon News Home</h2>
            <div className="space-y-8 mt-5">
              {
                allNews && allNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
              }
            </div>
          </div>
          <RightSideNav></RightSideNav>
        </section>
      </main>
    </>
  )
}

export default Home
