import React, {Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import axios from 'axios'
import SongsList from './components/SongsList'
import SongDetails from './components/SongDetails'
import AudioPlayer from './components/AudioPlayer'
import '../src/index'

class App extends Component {
  
  state = {
    songIndex: 0,
    isMusicPlaying: false,
    songs: [],
    isLoading: true
   }
   
  playNow = () => {
    this.setState({
      isMusicPlaying: true
    })
   }

  pauseNow = () => {
    this.setState({
        isMusicPlaying: false
    })
   }
  
  playSong = (index) => {
    this.setState({
      songIndex: index,
      isMusicPlaying: true
    })
  }

  playSongDetails = (songID) => {
    this.setState({
      songIndex: songID,
      isMusicPlaying: true
    })
  }

  changeSong = (direction) => {  
  if(direction === 'next') {
      const newSong = this.state.songIndex >= this.state.songs.length - 1 ? 0 : this.state.songIndex + 1   
      this.setState({
              songIndex: newSong
          })
      }
  else if (direction === 'previous') {
      const newSong = this.state.songIndex <= 0 ? this.state.songs.length - 1 : this.state.songIndex - 1
      this.setState({
          songIndex: newSong
          })
      }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/')
      .then(response => {
        const newSongs = response.data.songs
        this.setState({
            songs: newSongs,
            isLoading: false
        })
      })
      .catch(error => {
          console.log(error)
      })
  }
  
  render() {
    return (
      <div className="App">
        <div className="row row-centered">
          <div className="card-deck">
            <Switch>
              <Route exact path="/" render={()=><SongsList 
                songs={this.state.songs}
                playSongDetails={this.playSongDetails}
                { ...this.state }
                pauseNow={this.pauseNow}
                />}
              />
              <Route path='/:songId'render={(routeProps)=><SongDetails
                {...routeProps} 
                { ...this.state }
                playSongDetails={this.playSongDetails}
                pauseNow={this.pauseNow}
                />}
              />
            </Switch>
            <AudioPlayer  { ...this.state }
              playNow={this.playNow}
              pauseNow={this.pauseNow}
              changeSong={this.changeSong}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
