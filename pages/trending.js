import Songs from "../Components/Songs/songs";
import withWidth from "../HOC/withWidth/withWidth";
import {Fragment, useEffect, useState} from "react";
import axios from "axios";

const Trending = props => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        axios.get('/api/trending')
            .then(res => {
                setSongs(res.data);
            });
    }, []);

   return(
       <Fragment>
           <Songs title='Trending' songs={songs} />
       </Fragment>
   )
}

export default withWidth(Trending);