import { songsDb } from "./index";

export default (req, res) => {
    const {songId} = req.query
    const song = songsDb.find(song => song.id === songId);
    res.status(200).json(song);
}