import './App.css';
import { useState } from 'react';

function App() {
  const [joke,Setjoke]=useState(null);
  let url="https://v2.jokeapi.dev/joke/Any?type=single";
  let getJokes=()=>{
      fetch(url).then((data)=>{
        let js=data.json();
        // console.log(js);
        return js;
      }).then((item)=>{
        // console.log(item);
        let val=item.joke;
        // console.log(val);
        Setjoke(val);}).catch((err)=>{
          console.error(err);
        })
  }
  return (
        <div className="wrapper">
            <span>&#128514;</span>
            <p id="joke">{joke}</p>
            <button id="btn"onClick={getJokes}>Get Random Joke</button>
        </div>
  );
}

export default App;
