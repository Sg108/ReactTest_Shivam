import React from "react"
import Collapse from "../Collapse/Collapse"
import './faq.css'
const Faq = () => {
    return (
        <div className="coll">
        <div className="faq-section">
            <div className="section-head">FAQS</div>
           
            <Collapse
                label={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit"
                }
            >
                <>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio ab sed sunt nihil. Eum quisquam qui consequuntur dolor
                    harum blanditiis impedit quae quasi, amet pariatur veritatis
                    atque, consequatur temporibus vitae.
                </>
            </Collapse>
            <Collapse
                label={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit"
                }
            >
                <>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio ab sed sunt nihil. Eum quisquam qui consequuntur dolor
                    harum blanditiis impedit quae quasi, amet pariatur veritatis
                    atque, consequatur temporibus vitae.
                </>
            </Collapse>
            <Collapse
                label={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit"
                }
            >
                <>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio ab sed sunt nihil. Eum quisquam qui consequuntur dolor
                    harum blanditiis impedit quae quasi, amet pariatur veritatis
                    atque, consequatur temporibus vitae.
                </>
            </Collapse>
            </div>
        </div>
    )
}

export default Faq