import {songsDb, artistsDB} from "../songs";

export default (req, res) => {
    const {artistId} = req.query;

    res.status(200).json(songsDb.filter(song => song.artistId === artistId));
}