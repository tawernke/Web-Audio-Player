import React, {Component} from 'react'

class SongDetails extends Component {
    render() {
        const { match: { params }, isMusicPlaying, songs, isLoading, songIndex, pauseNow, playSongDetails}= this.props
        const paramsSongNumber = Number(params.songId)
        console.log(this.props.songs)
        return (
            < div className="col-lg-5 col-sm-10 align-items-stretch mx-auto card-style" >
                {isLoading ? <img src="/images/redVinyl.png" height="200px"alt=""/> :
                <div className="card">
                    <img className="card-img-top" src={songs[paramsSongNumber].albumArt} alt=""/>
                    <div className="card-body">
                        <span>
                            <h5>{songs[paramsSongNumber].name}</h5>
                            {isMusicPlaying && songIndex === paramsSongNumber ? 
                            <img className="audio-controls button-pause" alt="" src="/images/pause.png" onClick={pauseNow}/> : 
                            <img className="audio-controls button-play" alt="" src="/images/play.png" onClick={() => {playSongDetails(paramsSongNumber)}}/>}
                        </span>
                        <p>{songs[paramsSongNumber].description}</p>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default SongDetails