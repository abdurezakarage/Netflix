import React from 'react'
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import Row from '../../Component/Row/Row';
import requests from '../../utilis/requests';
import Baner from '../../Component/Baner/Baner';

 function Home() {
  return (
    <div>
      <Header />
      <Baner />
      <Row
        title="Netflix Orginal"
        fetchUrl={requests.fetchNetflixOrginals}
        isLarge
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />

      <Row title="Top Rated" fetchUrl={requests.fetchTopratedmovies} />
      <Row title="Action Movies" fetchUrl={requests.fechActionmovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fechComedymovies} />
      <Row title="Horror Movies" fetchUrl={requests.fechHorrormovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomancemovie} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
}
export default Home