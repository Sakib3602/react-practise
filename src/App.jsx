import { useState } from "react"
import {useEffect} from "react"


function App() {
  let ll = [
    {price: "$567"},
    {price: "$167"},
    {price: "$67"},
    {price: "$7"},
    
  ]
  return (
    <>

   <div style={{display:"flex"}}>
   <Job name="sakib" job="sex" ama = "amazon" price={ll[0].price} ></Job>
   <Job name="giga" job="hunter" ama = "adobe"  price={ll[1].price}></Job>
   <Job name="madarcod" job="khankirpola" ama = "Picsert"  price={ll[2].price}></Job>
   </div>
   <List></List>
   <Call></Call>
   
   

   <div style={{ display: "flex" }}>
  <div style={{ flex: 1 }}>
    <ApiTop />
  </div>
  <div style={{ flex: 1 }}>
    <Api />
  </div>
</div>
   
    
    
    </>
  )
}

// agin
function ApiTop(){

  const [fix,setFix] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setFix(data))



  },[])
  let dig = {
    Minheight: "100px",
    border: "2px solid pink",
    width : "500px",
    padding: "10px",
    margin: "20px"
  }


  return <>

  <div >

    {
      fix.map(e => {
        return <>
        <div style={dig}>
        <h2>{e.email}</h2>
        <p>{e.body}</p>
          
          
          
        </div>        
        
        </>
      })
    }

  </div>


  
  
  
  </>
}

// api
function Api(){

  let dig = {
    Minheight: "100px",
    border: "2px solid pink",
    width : "500px",
    padding: "10px",
    margin: "20px"
  }

  const [sakib,setSakib] = useState([])

  useEffect(()=>{
    
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => setSakib(data))
  })

  return <>

    {
      sakib.map(sa => {
        return <>
        <div style={dig}>
        <h2>{sa.title}</h2>
        <p>{sa.body}</p>
        </div>
        </>
      })
    }
 
  </>
}

// fix

// usesate
function Call(){

  const [count,setCount] = useState(0);

  let event = ()=>{
    let x = count + 1;
    setCount(x)
    if(x===10){
     
      setCount("no")
    }
  }
  let dick = ()=>{
    let d = count -1;
    setCount(d);
    if(count <= 0){
      setCount("kire madarcod")
    }
  }
  return <>

  <h1>Count : {count}</h1>
  <button onClick={event}>Inscrease</button>
  <button onClick={dick}>Decrease</button>
  
  
  
  </>
}
function List(){

  let kol = ["hridoy","siam","rezaul","saiful","sawon"]
 


  return <>

  <ul>
    {
      kol.map(f => {
        return <>
         <li>{f}</li>
        
        </>      })
    }
  </ul>
  
  
  
  </>
}

function Job(p){
  let degine = {
    border: "2px solid red",
    color: "black",
    backgroundColor: "gray",
    width: "400px",
    Minheight: "200px",
    margin: "20px",
    padding: "20px",
    
    
  }

  

 
  return <>

  <div >
  <div style={degine}>
    <h3 >My Name is : {p.name}</h3>
    <h2>My Job is : {p.job}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur repellat aperiam eum quasi adipisci.</p>
    <a target="_blank" href="https://www.youtube.com/">Click Here</a>

    <h3>Price : {p.price}</h3>

    <div style={{display:"flex",justifyContent:"space-between"}}>
      <h4>Add {p.ama} stock. <br />
      Get one MOnth free.
      
      </h4>
      
      <button>Buy now</button>
    </div>
  </div>
  </div>
  
  
  </>
}

export default App
