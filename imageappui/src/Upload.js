import { Fragment, useState } from "react"
import './App.css';

const Upload = () => {


         const [imgName,setImgName]=useState("");
        const [imgURL,setImgURL]=useState("");
        const [imgDetails,setImgDetails]=useState("");

    const uploadImageForm =async(event) => {


        

        event.preventDefault();
        try {
            
            const body={imgName,imgURL,imgDetails};
            console.log(body);
            await fetch("http://localhost:8080/image",{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(body)
            })
            window.location="/";
        } catch (err) {
            console.error(err.message);
            
        }
    }

    return <Fragment>

        <h1> Please Upload Images Here </h1>

        <div className="UploadImage">
            <form className="imageForm" onSubmit={uploadImageForm}>
            <label>Image Name: </label>
                <input type="text" name="imgName" id="imgName"
                value={imgName}
                onChange={e => setImgName(e.target.value)}/>

                <label>Image URL: </label>
                <input type="text" name="imgURL" id="imgURL"
                value={imgURL}
                onChange={e => setImgURL(e.target.value)}/>

                <label>Image Details: </label>
                <input type="text" name="imgDetails" id="imgDetails"
                value={imgDetails}
                onChange={e => setImgDetails(e.target.value)}/>
                <br></br>
                <button className="btn btn-success" >Upload Image</button>

            </form>
        </div>
    </Fragment>
}

export default Upload;