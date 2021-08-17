import styles from './wave.module.scss';
import {useEffect, useState} from "react";

const Wave = props => {

    const [columns, setColumn] = useState([]);

    useEffect(()=>{
        const ac = new AbortController();
        if(props.playing){
            setTimeout(()=>{
                const colmns = [];
                for(let i=0; i<54; i++){
                    colmns.push(<div key={i} style={{height: getRandomHeight(100)+'%'}} className={styles.column} />);
                }
                props.playing ? setColumn(colmns) : null;
            }, 400);
        }
        return ac.abort();
    });

    const getRandomHeight = max => {
        return (Math.random() * (max-4)) + 4;
    }

    return (
        <div className={styles.wave}>
            {columns}
        </div>
    )
}

export default Wave;