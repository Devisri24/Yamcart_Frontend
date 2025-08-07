import React, {useState, useEffect} from 'react'
import { API_URL } from '../api'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";


const Chains = () => {
    const [vendorData, setVandorData] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [loading ,setLoading] = useState(true);
  

    const vendorFirmHandler = async ()=>{
        try {
            const response = await fetch(`${API_URL}/vendor/all-vendors`)
            const newData = await response.json()

                setVandorData(newData);
                console.log("this is api Data", newData)
                setLoading(false)
        } catch (error) {
            alert("failed to fetch data")
            console.error("failed to fetch data")
            setLoading(true)
        }
    }
        useEffect(()=>{
            vendorFirmHandler()            
        }, [])

    
    const handleScroller = (direction)=>{
        const gallery = document.getElementById("chainGallery")
        const scrollAmount = 500;

        if(direction === "left"){
            gallery.scrollTo({
                left: gallery.scrollLeft -scrollAmount,
                behavior: "smooth"
            })
        }else if( direction === "right"){
            gallery.scrollTo({
                left: gallery.scrollLeft +scrollAmount,
                behavior: "smooth"
            })
        }

    }

  return (
      <div className='mediaChainSection'>
    <div className='search'>🔎 Your 🥣 is Loading....</div>
      <div className="btnSection">
        <button onClick={()=>handleScroller("left")}>
            <FaRegArrowAltCircleLeft className='btnIcons'/>
        </button>
        <button onClick={()=>handleScroller("right")}>
            <FaRegArrowAltCircleRight className='btnIcons'/>
        </button>
      </div>
        <h3>Top Restaurant chains in Visakhapatnam</h3>
        <section className="chainSection" id="chainGallery" onScroll={(e)=>setScrollPosition(e.target.scrollLeft)}>
            {vendorData.vendors && vendorData.vendors.map((vendor)=>{
                return(
                    <>
                    <div className="vendorBox">
                        {vendor.firm.map((item)=>{
                            return(
                                <>
                                <div>
                                    {/* {  {item.firmName}  } */}

                                </div>
                                <div className="firmImage">
                                    <img src={`${API_URL}/uploads/${item.image}`}/>


                                </div>
                                </>
                            )
                        })}
                    </div>
                    </>
                )
            })}

        </section>

       
      </ div>
  )
}

export default Chains