import { useLoaderData, useParams } from "react-router-dom"
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import RightSideNav from "../Home/RightSideNav";
import SingleNewsCard from "./SingleNewsCard";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Loader from './../../components/Loader/Loader';
import { Helmet, HelmetProvider } from "react-helmet-async";

const News = () => {

  const { loading } = useContext(AuthContext);

  const { id } = useParams();
  const news = useLoaderData();
  const singleNews = news.find(findNews => findNews._id === id);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{singleNews.title}</title>
        </Helmet>
        {
          loading && <Loader></Loader>
        }
        <header className="max-w-screen-xl mx-auto px-3 mt-12 mb-20">
          <Header></Header>
          <Navbar></Navbar>
        </header>
        <main className="max-w-screen-xl mx-auto px-3 mb-12">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              {
                singleNews
                  ? <SingleNewsCard singleNews={singleNews}></SingleNewsCard>
                  : <p>News not Found!</p>
              }
            </div>
            <RightSideNav></RightSideNav>
          </section>
        </main>
      </HelmetProvider>
    </>
  )
}

export default News
