import Header from "../../components/Header/Header"
import LatestNews from "../../components/LatestNews/LatestNews"
import Navbar from "../../components/Navbar/Navbar"

const Home = () => {
  return (
    <>
      <header className="max-w-screen-xl mx-auto px-3">
        <Header></Header>
        <LatestNews></LatestNews>
        <Navbar></Navbar>
      </header>
      <main className="max-w-screen-xl mx-auto px-3">
        Home Page
      </main>
    </>
  )
}

export default Home
