import React, {useState} from "react";
import Payment from "./Payment";
import FormSuccess from "./FormSuccess";
import "./Payment"

const Form = () => {
    const [isSummitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true);
    }
    return(
        <>
            <div className="form-container">
                {!isSummitted ? <Payment submitForm=
                {submitForm} /> : <FormSuccess />}

                <div className='form-content-right'>
                    {/* <img className='form-img' src='image/cinema.jpg' alt='cinema' /> */}
                </div>   
            </div>

            <img className='form-img' src='image/cinema.jpg' alt='cinema' />
        </>
    );
};

export default Form;