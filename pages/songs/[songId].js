import withWidth from "../../HOC/withWidth/withWidth";
import {default as SongPage} from '../../Components/Song/song';
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";

const Song = props => {

    const router = useRouter();
    const {songId} = router.query;

    const [song, setSong] = useState({id: "", title: "", artist: "", likes: 0, views: 0});

    useEffect(() => {
        axios.get('/api/songs/'+songId)
            .then(res => {
                setSong(res.data);
            });
    }, [router.isReady]);

    return(
        <div style={{margin: '0 6%'}}>
            <SongPage song={song} />
        </div>
    )
}

export default withWidth(Song);