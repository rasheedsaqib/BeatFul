import {default as AllSongs} from "../../Components/Songs/songs";
import withWidth from "../../HOC/withWidth/withWidth";
import {Fragment, useState, useEffect} from "react";
import axios from "../../axios";
import {useRouter} from "next/router";

const Songs = ({songs}) => {

    return(
        <Fragment>
            <AllSongs title='All Songs' songs={songs} />
        </Fragment>
    )
}

export const getStaticProps = async context => {
    let songs = [];

    try {
        songs = await axios.get('/api/songs');
    }catch (error){
        return{
            notFound: true
        }
    }

    return {
        props: {
            songs: songs.data,
            revalidate: 10
        }
    }
}

export default withWidth(Songs);