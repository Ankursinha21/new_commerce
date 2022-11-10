import React, {useState} from 'react'
import '../styles/ProdImage.css'

const ProdImage = ({ image = [{url: ""}] }) => {

    const [mainImage, setMainImage] = useState(image[0]);
    
  return (
        <div className="single-pro-image">
            <div className="main-image">
                <img src={mainImage.url} alt={mainImage.fileName} width="100%" id="mainImg"/>
            </div>
            <div className="small-img-grp">
                {image.map((curElem, index)=>{
                    return(
                        <div className="small-img-col">
                    <img src={curElem.url} width="100%" className="small-img" alt={curElem.fileName} key={index} onClick={()=>setMainImage(curElem)}/>
                </div>
                    );
                })}
            </div>
        </div>
  )
}

export default ProdImage