import Artists from "../Components/Artists/artists";
import withWidth from "../HOC/withWidth/withWidth";
import {useEffect, useState} from "react";
import axios from "../axios";

const Library = ({artists}) => {

    return(
        <div>
            <Artists artists={artists} />
        </div>
    )
}

export const getStaticProps = async context => {
    let artists = [];

    try {
        artists = await axios.get('/api/artists');
    }
    catch(error){
        return {
            notFound: true
        }
    }

    return{
        props: {
            artists: artists.data
        },
        revalidate: 60
    }
}

export default withWidth(Library);