import Artists from "../Components/Artists/artists";
import withWidth from "../HOC/withWidth/withWidth";

const Library = props => {
    return(
        <div>
            <Artists />
        </div>
    )
}

export default withWidth(Library);