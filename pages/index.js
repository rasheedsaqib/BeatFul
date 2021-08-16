import Hero from "../Components/Index/Hero/hero";
import Trending from "../Components/Index/Trending/trending";
import Library from "../Components/Index/Library/library";
import Experience from "../Components/Index/Experience/experience";
import Reviews from "../Components/Index/Reviews/reviews";
import withWidth from "../HOC/withWidth/withWidth";
import {useEffect, useState} from "react";
import axios from "axios";

const Home = () => {


    const [trending, setTrending] = useState([]);
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        axios.get('/api/trending')
            .then(res => {
                setTrending(res.data);
            });

        axios.get('/api/artists')
            .then(res => {
                setArtists(res.data);
            });
    }, []);

  return (
      <div style={{margin: '0 6%'}}>
          <Hero />
          <Trending trending={trending} />
          <Library artists={artists} />
          <Experience />
          <Reviews />
      </div>
  )
}

export default withWidth(Home);