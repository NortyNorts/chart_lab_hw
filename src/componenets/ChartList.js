import React from "react";
import ListItem from "./ListItem";

const ChartList = ({songs}) => {

    const songItems = songs.map((song, index) => {
        return (
        <ListItem song={song} key={index} />
        )
      })

    return (
        <div>
        <ul>
        {songItems}
        </ul>
        </div>
    )
}

export default ChartList