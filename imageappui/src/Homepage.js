
import './App.css';
import { Fragment,useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const Homepage = () => {

    const BASE_API ="http://localhost:8080/image"

    const[imageData,setImageData] = useState([]);

    const getAllImage = async() => {

        try {
            const response= await fetch(BASE_API);
            const responseData = await response.json();

            console.log(responseData);
            setImageData(responseData);
            
        } catch (error) {
            
        }
    }
    
    useEffect(() => {getAllImage()},[]);


  

    var ImageMainBody = 
    <div className="eachImage">

{imageData.map(element=>(
        
        <div className="specifier" key={element.imageId}>
    <h3>{element.imgName}</h3>
    <Popup trigger={<img src={element.imgURL} alt={element.imgName} position="right center" ></img>}>

    <div >{element.imgDetails}</div>
    </Popup>
    
   
    </div>
    
        
))}
            </div>
    


        return <Fragment>
    <div >
   
    <h2> All Images </h2>
    </div>
    

    <div className="allImage">
        {ImageMainBody}

    </div>

        </Fragment>
    
}

export default Homepage;


