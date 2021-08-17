import {default as AllSongs} from "../../Components/Songs/songs";
import withWidth from "../../HOC/withWidth/withWidth";
import {Fragment, useState, useEffect} from "react";
import axios from "axios";
import {useRouter} from "next/router";

const Songs = props => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
       axios.get('/api/songs')
           .then(res => {
               setSongs(res.data);
           });
    }, []);

    return(
        <Fragment>
            <AllSongs title='All Songs' songs={songs} />
        </Fragment>
    )
}

export default withWidth(Songs);