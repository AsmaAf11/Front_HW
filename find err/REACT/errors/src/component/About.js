
import React, { useState, useEffect } from 'react';
import '../App.css'
import f1 from './img/f1.jpeg'
import f2 from './img/f2.jpeg'
import f3 from './img/f3.jpeg'



import 'bootstrap/dist/css/bootstrap.min.css';
// import {Container,Nav,Navbar,NavDropdown ,Carousel,Card,Button,Collapse} from 'react-bootstrap';

function About() {
    // const arr=[<img src={f1}/>,<img src={f2}/>,<img src={f3}/>]
    // const [count1,setCount1]= useState(0)
    const[num,setNum]=useState(0)
    const OnClick=()=>(
        setNum(num+1)
        );
    const [name , setName]=useState("asma")// هنا الانيشل فاليو
    const Clickme=()=>(
        setName("Emtinan"));
    // const [img , setImg]=useState(arr[0])

    const images = [f1,f2,f3]
    const [count1 , setCount1] = useState(0);
    const nextImage=()=>{
        if(count1 < images.length-1){
         setCount1(count1+1)
        }
        else{
            setCount1(0)
        }
    }

useEffect(() => {
    document.title = `You clicked ${count1} times`;
    console.log("mount")
    
    return console.log("out")
}, [console.log(`You updated ${count1+1} times`)]);
    

  return (
    <div>
        {/* <button onClick={Clickme}>Clickme</button>
        {name}
        <hr></hr>
        <button onClick={OnClick}>Click</button>
        {num}
        <hr></hr>

      */}
<img src={images[count1]}/>
        <button onClick={nextImage}> Change image</button>
        <hr></hr>




      


    </div>
  )
}


export default About