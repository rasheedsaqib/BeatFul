import Artists from "../Components/Artists/artists";
import withWidth from "../HOC/withWidth/withWidth";
import {useEffect, useState} from "react";
import axios from "axios";

const Library = props => {

    const [artists, setArtists] = useState([]);

    useEffect(() => {
        axios.get('/api/artists')
            .then(res => {
                setArtists(res.data);
            });
    }, []);

    return(
        <div>
            <Artists artists={artists} />
        </div>
    )
}

export default withWidth(Library);