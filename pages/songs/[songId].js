import withWidth from "../../HOC/withWidth/withWidth";
import {default as SongPage} from '../../Components/Song/song'

const Song = props => {
    return(
        <div style={{margin: '0 6%'}}>
            <SongPage />
        </div>
    )
}

export default withWidth(Song);