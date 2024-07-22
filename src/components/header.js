import Card from "./card";
import '../style/header.css'
import { useEffect, useState } from "react";

export default function Header(){

    const [count, setCount] = useState(0)


    useEffect(()=>{
        document.title = `You clicked ${count} times`;
    },[count])

    
  const [count2, setCount2] = useState(0);

  useEffect(() => {
   document.title = `You have clicked the second button ${count2} times`
  }, [count2]);

    return(
    <>
    <Card />
    <h1 className="heading">Header</h1>
    <p>Home</p>

<button onClick={()=>{setCount(count+1)}}>Submit</button>

    <button onClick={() => {setCount2(count2 + 1)}}>Click me</button>

    </>
    )
}