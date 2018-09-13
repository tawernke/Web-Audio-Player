import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class SongsList extends Component {
    render() {
        const {isMusicPlaying, songIndex} = this.props
        const songsJSX = this.props.songs.map((song, i) => {
            return (
            <span className="song-list-item" key={i}>
                <img className="details-thumb" alt="" src={song.albumArt}/>
                <Link className="song-item" to={'/' + song.id}><p>{song.name}</p></Link>
                {isMusicPlaying && songIndex === song.id ? 
                <img className="button-pause-list" alt="" src="/images/pause.png" onClick={this.props.pauseNow}/> : 
                <img className="button-play-list" alt="" src="/images/play.png" onClick={() => {this.props.playSongDetails(song.id)}}/>}
            </span>
            )
        })
        return (
            <div className="col-lg-4 col-sm-6 card-style">
                <div className="card">
                    {songsJSX}
                </div>
            </div>
        )
    }
}

export default SongsList;