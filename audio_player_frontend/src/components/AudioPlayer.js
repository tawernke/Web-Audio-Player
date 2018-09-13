import React, {Component} from 'react'
import AudioSpectrum from 'react-audio-spectrum'
import '../index'


class AudioPlayer extends Component {
    constructor(props) {
    super(props)

    this.nextButtonRef = element => {
      this.nextButton = element.name
    }
  }
   
    componentDidUpdate() {
        this.props.isMusicPlaying ? this.audio.play() : this.audio.pause()
    }
  
  render() {
    const {songIndex, songs, isLoading, isMusicPlaying} = this.props
    let playPauseButton
    isMusicPlaying ? 
    playPauseButton = <img className="audio-controls button-pause" alt="" src="/images/pause.png" onClick={this.props.pauseNow}/> : 
    playPauseButton = <img className="audio-controls button-play" alt="" src="/images/play.png" onClick={this.props.playNow}/>
        return (
            < div className="col-lg-5 col-sm-10 mx-auto  card-style" >
                <div className="card">
                    {isLoading ? <img src="redVinyl.png" height="200px"alt=""/> :
                    <div className="audio-player">
                        <div className="card-body">
                            <AudioSpectrum
                                id="audio-canvas"
                                height={600}
                                width={400}
                                audioId={'audio-element'}
                                capColor={'red'}
                                capHeight={5}
                                meterWidth={2}
                                meterCount={212}
                                meterColor={[
                                    {stop: 0, color: '#f00'},
                                    {stop: 0.5, color: '#0CD7FD'},
                                    {stop: 1, color: 'red'}
                                ]}
                                gap={1}
                            />
                            <h5 className="audioPlayer-songTitle">{songs[songIndex].name}</h5>
                            <p className="audioPlayer-artistName">{songs[songIndex].artist}</p>
                            <audio id="audio-element" ref={(self) => { this.audio = self } } preload="true" src={songs[songIndex].source}>
                            </audio>
                            <span className="nextPrevious">
                                <img className="audio-controls button-previous" alt="" src="/images/previous.png" onClick={() => {this.props.changeSong('previous')}}/>
                                {playPauseButton}
                                <img className="audio-controls button-next" alt="" src="/images/next.png" onClick={() => {this.props.changeSong('next')}}/>
                            </span>
                        </div>
                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default AudioPlayer








