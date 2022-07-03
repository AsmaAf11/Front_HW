import Card from './components/Card.js';
import CardData from './components/CardData.js';
import './App.css';
import img1 from './components/img/m1.jpg';
import './components/img/m2.jpg';
import './components/img/m3.jpg';


function App() {
  let CardName= CardData.map((card)=>{
   
    return <Card card={card} />;
    
  });




  return (
    <body>
    <div className="App">
          <hr></hr>
      <h1>Movies</h1>
      <hr></hr>
      </div>
      <p class="row" style={{display:'flex',flexWrap:'noWrap'}}>

       {CardName}
      
      </p>

      
      
  
    
    </body>
  )
} 

export default App;