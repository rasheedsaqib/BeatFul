import {default as AllSongs} from "../../Components/Songs/songs";
import withWidth from "../../HOC/withWidth/withWidth";
import {Fragment} from "react";
import axios from "../../axios";

const Songs = ({songs}) => {

    if(!songs){
        return <p>Loading</p>
    }

    return(
        <Fragment>
            <AllSongs title={songs[0] ? songs[0].artist : 'Songs'} songs={songs} />
        </Fragment>
    )
}

export const getStaticProps = async context => {

    let artist = {data: []};

    try {
        artist = await axios.get('/api/artists/' + context.params.artistId);
    }
    catch(error){
        return {
            redirect: {destination: '/404'}
        }
    }

    return{
        props: {
            songs: artist.data,
            revalidate: 10
        }
    }
}

export const getStaticPaths = async (context)=>{
    return{
        paths: [],
        fallback: true
    }
}

export default withWidth(Songs);