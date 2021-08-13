import Hero from "../Components/Index/Hero/hero";
import {Fragment} from "react";
import Trending from "../Components/Index/Trending/trending";
import Library from "../Components/Index/Library/library";
import Experience from "../Components/Index/Experience/experience";
import Reviews from "../Components/Index/Reviews/reviews";
import withWidth from "../HOC/withWidth/withWidth";

const Home = () => {
  return (
      <div style={{margin: '0 6%'}}>
          <Hero />
          <Trending />
          <Library />
          <Experience />
          <Reviews />
      </div>
  )
}

export default withWidth(Home);