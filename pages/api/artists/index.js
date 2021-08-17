import {songsDb, artistsDB} from "../songs";

export default (req, res) => {

    res.status(200).json(artistsDB);
}
