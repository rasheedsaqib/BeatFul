import Songs from "../Components/Songs/songs";
import withWidth from "../HOC/withWidth/withWidth";
import {Fragment} from "react";

const Trending = props => {
   return(
       <Fragment>
           <Songs />
       </Fragment>
   )
}

export default withWidth(Trending);