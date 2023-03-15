import logo from './logo.svg';
import './App.css';
import Gdiv from './Navbar.js'
import Movies from './Movies.js'

import IMG1 from './Death-Note.webp'
import IMG2 from './oip.jpg'
import IMG3 from './pho.jpg'
import IMG4 from './one-piece-anime-visual.jpg'
import IMG5 from './9e6df1f5fc083ea5d2f3111fb430d.png'
import IMG6 from './nr.jpg'
import IMG7 from './cb.jpeg'
import IMG8 from './dd.webp'

function App() {
  

    let movie = [ { 
        Title : "Death Note", 
        Summary : "From classic favorites like Death Note and Attack on Titan to newer additions like Chainsaw Man, this list represents the voice of the anime community.",
        IMG : IMG1
    },
    {
        Title : "My Hero Academia",
        Summary : "My Hero Academia is one of the newer additions to the shonen genre and has since become one of the coolest. It follows Izuku Midoriya and his classmates as ...",
        IMG : IMG2
    },
    {
        Title : "Shingeki no Kyojin",
        Summary : "This was no small feat. Thanks to multiple streaming services, anime continues to grow in popularity, meaning there was no shortage of new series to enjoy.",
        IMG : IMG3
    },
    {
        Title : "One piece",
        Summary : "More One Piece. Every One Piece Character, Ranked Best to Worst; 15 Mindblowing One Piece Fan Theories. Available On: Netflix Logo Icon. subscription.",
        IMG : IMG4
    },
    {
        Title : "Cowboy Bebop",
        Summary : "The best anime dub of all time is Cowboy Bebop. Although the Japanese voice acting is top-notch, the English cast knocks it out of the park.",
        IMG : IMG5
    
    },
    {
        Title : "Naruto",
        Summary : "4. Naruto ... You will love the degree of emotions in this show. There are so many heart-wrenching moments that it will make you really worry about the characters ...",
        IMG : IMG6
    },
    {
        Title : "One Punch Man",
        Summary : "While One-Punch Man is filled with all the action and superheroes needed for a thrilling series, it is a hilarious and loving parody of shonen anime tropes.",
        IMG : IMG7
    },
    {
        Title : "Code Geass",
        Summary : "More Code Geass: Lelouch of the Rebellion. The Best Anime Like Code Geass. #29 of 198 on. The Best Grown-Up Anime of All Time ...",
        IMG : IMG8
    }
    ]
  

  return (
    <div className="App">
      
  <Gdiv/>
  <Movies Mov = {movie}/>

    </div>
  );
}

export default App
