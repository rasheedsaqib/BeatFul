import Songs from "../Components/Songs/songs";
import withWidth from "../HOC/withWidth/withWidth";
import {Fragment, useEffect, useState} from "react";
import axios from "../axios";

const Trending = ({trending}) => {

   return(
       <Fragment>
           <Songs title='Trending' songs={trending} />
       </Fragment>
   )
}

export const getStaticProps = async context => {

    let trending = [];

    try {
        trending = await axios.get('/api/trending');
    }
    catch(error){
        return {
            notFound: true
        }
    }

    return{
        props: {
            trending: trending.data
        },
        revalidate: 10
    }
}

export default withWidth(Trending);