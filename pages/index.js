import Hero from "../Components/Index/Hero/hero";
import Trending from "../Components/Index/Trending/trending";
import Library from "../Components/Index/Library/library";
import Experience from "../Components/Index/Experience/experience";
import Reviews from "../Components/Index/Reviews/reviews";
import withWidth from "../HOC/withWidth/withWidth";
import {useEffect, useState} from "react";
import axios from "../axios";
import {error} from "next/dist/build/output/log";

const Home = ({trending, artists}) => {

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

export const getStaticProps = async (context) => {

    let trending = [];
    let artists = [];

    try {
        trending = await axios.get('/api/trending');
        artists = await axios.get('/api/artists');
    }
    catch(error){
        return {
            notFound: true
        }
    }

    return{
        props: {
            trending: trending.data,
            artists: artists.data
        },
        revalidate: 10
    }
}

export default withWidth(Home);