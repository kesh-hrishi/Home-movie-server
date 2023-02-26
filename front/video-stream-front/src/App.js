import './App.css';

import { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';

function App() {

  const [videoId, setVideoId] = useState(null)

  function playVideo(e, videoId){
    e.preventDefault()
    setVideoId(videoId)
  }

  return (
    <div className="App">
      {videoId && <VideoPlayer videoId={videoId}></VideoPlayer>} <br />
      <h1>Movie List</h1>
      <div>
      <button  onClick={(e)=>{playVideo(e, 'Planes')}}>Planes 2023</button>     
      <button  onClick={(e)=>{playVideo(e, 'first')}}>Play Video 1</button>     
      <button onClick={(e)=>{playVideo(e, 'second')}}>Play Video 2</button>

      <div>
      <button onClick={(e)=>{playVideo(e, 'third')}}>Play Video 3</button>   
      <button onClick={(e)=>{playVideo(e, 'cat')}}>cat</button>
      </div>
      
      </div>
    </div>
  );
}

export default App;