import {default as AllSongs} from "../../Components/Songs/songs";
import withWidth from "../../HOC/withWidth/withWidth";
import {Fragment, useState, useEffect} from "react";
import axios from "axios";
import {useRouter} from "next/router";

const Songs = props => {

    const router = useRouter();
    const {artistId} = router.query;

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        axios.get('/api/artists/'+artistId)
            .then(res => {
                setSongs(res.data);
            });
    }, [router.isReady]);

    return(
        <Fragment>
            <AllSongs title={songs[0] ? songs[0].artist : 'Songs'} songs={songs} />
        </Fragment>
    )
}

export default withWidth(Songs);