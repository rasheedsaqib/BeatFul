import {default as AllSongs} from "../../Components/Songs/songs";
import withWidth from "../../HOC/withWidth/withWidth";
import {Fragment} from "react";

const Songs = props => {

    return(
        <Fragment>
            <AllSongs title='All Songs' />
        </Fragment>
    )
}

export default withWidth(Songs);