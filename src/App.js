import {useState} from 'react';
import logo from './images/logo.png';
import './App.css';

const genres=[
  "ClassicRock", "Indie", "Rock","Country", "Electronic"
];
var genreSongs = {
  ClassicRock: [{
    name: "The Joker",
    artist: "Steve Miller Band",
    spotify: <iframe src="https://open.spotify.com/embed/track/371VkfwKiXJxgH5ZPoQNHD" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  }, {
    name: "The Long and Winding Road",
    artist: "The Beatles",
    spotify: <iframe src="https://open.spotify.com/embed/track/3mlMpmY8oZIBFc39D9zLbh" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  }, { 
    name: "While My Guitar Gently Weeps",
    artist: "Paul McCartney, Eric Clapton",
    spotify: <iframe src="https://open.spotify.com/embed/track/6ZHCQehGCpGWTi6wEzs8vf" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  }, {
    name: "The Chain",
    artist: "Fleetwood Mac",
    spotify: <iframe src="https://open.spotify.com/embed/track/5e9TFTbltYBg2xThimr0rU" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  },{
    name: "Stairway to Heaven",
    artist: "Led Zeppelin",
    spotify: <iframe src="https://open.spotify.com/embed/track/51pQ7vY7WXzxskwloaeqyj" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  }
],
  Indie: [{
    name: "Aaoge Tum Kabhi",
    artist: "The Local Train",
    spotify: <iframe src="https://open.spotify.com/embed/track/5VSJ9OfZx8V91A7u8Fuoh1" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  }, {
    name: "Baarishein",
    artist: "Anuv Jain",
    spotify: <iframe src="https://open.spotify.com/embed/track/5iCY0TXNImK4hyKfcplQsg" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  }, { 
    name: "Rihaee",
    artist: "Suzonn",
    spotify: <iframe src="https://open.spotify.com/embed/track/4y2QEmnp3DRgXjdbZfUs3X" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  }],
  
  Country: [{
    name: "Love You Like I Used To",
    artist: "Russell Dickerson",
    spotify: <iframe src="https://open.spotify.com/embed/track/1D7cfiC5mxqHfTCcOiRBej" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  }, {
    name: "Shotgun",
    artist: "George Ezra",
    spotify: <iframe src="https://open.spotify.com/embed/track/4ofwffwvvnbSkrMSCKQDaC" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  },{
    name: "Like Real People Do",
    artist: "Hozier",
    spotify: <iframe src="https://open.spotify.com/embed/track/4LGJ2pLDvTRnul3EcZoYkX" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  },{
    name: "Cherry Wine",
    artist: "Hozier",
    spotify: <iframe src="https://open.spotify.com/embed/track/4Q66chx9WzqWcLItXoZ5r4" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  },{
    name: "The Bones",
    artist: "Maren Morris",
    spotify: <iframe src="https://open.spotify.com/embed/track/7yFhA2fUsL2oIMWlw5DaHQ" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  }
],
  Electronic: [{
    name: "Good Things Fall Apart",
    artist: "ILLENIUM, Jon Bellion, Said The Sky, Annika Wells",
    spotify: <iframe src="https://open.spotify.com/embed/track/2DqhE7xzpGNsKYbptqblJg" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  }, {
    name: "Nightcall",
    artist: "Kavinsky",
    spotify: <iframe src="https://open.spotify.com/embed/track/0U0ldCRmgCqhVvD6ksG63j" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  },{
    name: "The Nights",
    artist: "Avicii",
    spotify: <iframe src="https://open.spotify.com/embed/track/19GqnCuVdOlSPHp6rHdYR2" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  },{
    name: "Without You Now",
    artist: "Digital Farm Animals, AJ Mitchell",
    spotify: <iframe src="https://open.spotify.com/embed/track/4LjF33zge6eszlGqqkcFJ8" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  },{
    name: "Daydreams",
    artist: "ARTY, Cimo Frankel",
    spotify: <iframe src="https://open.spotify.com/embed/track/2UM5jlU2iLXDEAtzIfa1m0" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  }
],
  Rock: [{
    name: "Slow Dancing in a Burning Room",
    artist: "John Mayer",
    spotify: <iframe src="https://open.spotify.com/embed/track/2jdAk8ATWIL3dwT47XpRfu" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  }, {
    name: "Love You Goodbye",
    artist: "One Direction",
    spotify: <iframe src="https://open.spotify.com/embed/track/1ZWLWVqeEMWMKTlteS0yLH" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  },{
    name: "Yellow",
    artist: "Coldplay",
    spotify: <iframe src="https://open.spotify.com/embed/track/3AJwUDP919kvQ9QcozQPxg" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  }, {
    name: "I Wanna Be Yours",
    artist: "Arctic Monkeys",
    spotify: <iframe src="https://open.spotify.com/embed/track/5XeFesFbtLpXzIVDNQP22n" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  }]
};
const song=Object.values(genres);
function App() {
  const [selected, setSelected]=useState("ClassicRock");
  function listSongs(genre) {
    setSelected(genre);
  };


  return (
    <div className="App">
      <nav>
        <div className="nav-brand">
          music
        <span className="nav-brand-and">&</span>
        code
        </div>
        <img src={logo} alt="logo" className="brand-logo-logo"/>
      </nav>
      <hr></hr>
      <div className="app-genres-list">
          {genres.map((genre)=>(
            <div className="genres" onClick={()=>listSongs(genre)}>
            {genre}
            </div>
          ))}
      </div>
      <div className="list-songs">
        {genreSongs[selected].map((son)=>(
          <div className="list-songs-one">
            <div className="song-name">{son.name}
              <span className="song-artist"><br/>{son.artist}</span>
            </div>
            <div className="spotify">{son.spotify}</div>
          </div>
          ))}
      </div>
      <div className="follow">
      <iframe src="https://open.spotify.com/follow/1/?uri=spotify:user:2mhqkpivw4erpazhfyuyammkg?si=fc3cdbf2fa38448e&size=detail&theme=dark&show-count=0" width="190" height="56" scrolling="no" frameborder="0" style={{border:"none", overflow:"hidden"}} allowtransparency="true"></iframe>
      </div>
    </div>
  );
}

export default App;
