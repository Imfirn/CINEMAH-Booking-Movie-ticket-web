import React, {useState} from "react";
import Payment from "./Payment";
// import FormSuccess from "./FormSuccess";
import "./Payment"
import Getticket from "../Getticket/Getticket"
const Purchase = ({data}) => {
    const [isSummitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true);
    }
    return(
        <>
            <div>


                {!isSummitted ? <Payment submitForm=
                {submitForm} /> : <Getticket data={data}/>}

                
            </div>

           
        </>
    );
};

export default Purchase;