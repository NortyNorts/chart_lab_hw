import React, {useEffect} from 'react';
import ChartList from '../componenets/ChartList';

const ChartContainer = () => {
    const [songList, setSongs] = ([])

    useEffect(() => {
        loadSongs();
        }, [])

    const loadSongs = funtion(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songsList => setSongs(songsList.feed.entry))
      }

    return(
        <>
        <h1>Current UK Top 20</h1>
        <ChartList songs={songs}/>
        </>
    )
}

export default ChartContainer