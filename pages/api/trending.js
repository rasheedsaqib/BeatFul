import {songsDb} from "./songs";

const compare = (a, b) => {
    return a.views >= b.views ? -1 : 1;
}

export default (req, res) => {
    res.status(200).json(songsDb.sort(compare).slice(0, 9));
}
