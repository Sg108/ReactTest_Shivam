import React from 'react'
import './Categories.css'
import fishy from '../../Images/fishy.png' 
import fishes from '../../Images/fishes.png' 
import lobster from '../../Images/lobster.png' 
import Box from '../box/Box'
    // const [box, setBox] = useState([])
    // const fetchData = async () => {
    //     axios.get("https://yourapi-url.com/api", {
    //             headers: {
    //                 "Access-Control-Allow-Origin": "*",
    //                 "Content-Type": "application/json",
    //             },
    //         })
    //         .then((data) => {
    //             setCat(data)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

    // useEffect(() => {
    //     fetchData()
    // })
const Categories = () => {
  return (
    <div className='category-section'>
        <div className='title'>
        <div className='head'>HOW IT WORKS</div>
        <div className='sub-head'>Sea Basket delivers fresh sourced seafood in a few easy clicks</div>
        </div>
        <div className='cat'>
            <div className='text'>CATEGORIES</div>
            <div className='categories'>
              
                {/* 
                        box.map(()=>{
                            return   <Box Name={"Fish"} image={fishy}/>
                        })
                    */}
                <div className='class'>
                    <img src={fishy} alt="cats"></img>
                    <div>Fish</div>
                </div>
                <div className='class'>
                    <img src={lobster} alt="cats"></img>
                    <div>Fish</div>
                </div>
                <div className='class'>
                    <img src={fishes} alt="cats"></img>
                    <div>Fish</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Categories