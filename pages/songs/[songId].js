import withWidth from "../../HOC/withWidth/withWidth";
import {default as SongPage} from '../../Components/Song/song';
import axios from "../../axios";

const Song = ({song}) => {

    if(!song){
        return <p>Loading</p>
    }

    return(
        <div style={{margin: '0 6%'}}>
            <SongPage song={song} />
        </div>
    )
}

export const getStaticProps = async context => {
    let song = {data: []};
    try {
        song = await axios.get('/api/songs/' + context.params.songId);
    }
    catch(error){
        return {
            redirect: {destination: '/404'}
        }
    }

    return{
        props: {
            song: song.data,
            revalidate: 10
        }
    }
}

export const getStaticPaths = async () => {

    return{
        paths: [],
        fallback: true
    }

}

export default withWidth(Song);