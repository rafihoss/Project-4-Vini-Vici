import React, {useState,useEffect} from 'react';
import './App.css'
import APIForm from '../components/APIForm'
import Home from '../components/Home'
import axios from 'axios';


function App() {
const [dta,setData] = useState(null);
const [show,setShow] = useState(false);
const [index,setIndex] = useState(0);
const [name,setName] = useState('');
const [seenData,setSeenData] = useState([]);
const [fileterData,setFilterData] = useState([]);
// const [fileterW,setFilterWD] = useState([]);

// Here i am wrinting the code to get the data 


const key = import.meta.env.VITE_API;
//console.log(key);
const URL = `https://api.thedogapi.com/v1/images/search?limit=10&has_breeds=true&include_breeds=true&include_categories=true&api_key=${key}`;

const getRandom = (lngth)=>{
    return Math.floor(Math.random() *lngth);
  }
useEffect(()=>{

const getData = async () =>{
   const response = await axios.get(URL);	
    // console.log(response.data[0]);
   // console.log("This is ",response.data[index]);
   const data_url = response.data;
   setData(data_url);
  }
    getData().catch(console.error);

  },[])


// End of the data collection code;



const handleButtonClick = () =>{
    setShow(true);
    const randomIn = getRandom(dta.length);
    setIndex(randomIn);
    setName(dta[index].breeds[0].name)
    //getData();	
    let newData = dta[index].breeds[0].name;

    setSeenData([...seenData,newData]);
  }

const addG = ()=>{
    let newData = dta[index].breeds[0].breed_group;
    setFilterData([...fileterData,newData]);
  }

const addW = ()=>{
    let newData = dta[index].breeds[0].weight_metric;
    setFilterData([...fileterData,newData]);
  }

const addA = () =>{
    let newData = dta[index].breeds[0].life_span;
    setFilterData([...fileterData,newData]);

  }


const seendata =seenData.map((elem,index)=>{
    return <h3 key={index}>{elem} ✅</h3>
  })  

const filterD = fileterData.map((el,index)=>{
    return <button className="btt2" key={index}>{el}</button>
  })
//	console.log(seenData);

// console.log(dta && typeof(dta[index].breeds[0].weight.metric));


  return (
    <div className="App">
       <div className="left">
        <h2>What have we seen so far?</h2>
        {seendata}
        </div>

      <div className="middle">
      <h1 className="title">{name === " "? "Dog Lover!":name}</h1>
      <div className="main">
      { !show ?  <Home/>:
          <APIForm
            url={dta && dta[index].url}
            weight={dta && dta[index].breeds[0].weight.metric }
            group={dta && dta[index].breeds[0].breed_group}
            lifeSpan={dta && dta[index].breeds[0].life_span }
            addGroup={addG}
            addW={addW}
            addA={addA}


        />}
        <button onClick={handleButtonClick}className="button">
          Discover
        </button>
      </div>
    </div>
      <div className="right">
      <h2 >Ban List!</h2>
      <div className="lst">

      {filterD}
        </div>
    </div>
   </div>
  )
}

export default App