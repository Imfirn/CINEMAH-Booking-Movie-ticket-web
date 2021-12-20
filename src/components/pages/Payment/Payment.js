import React from "react";
import { useParams } from "react-router-dom";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Payment.css";
import { Link } from "react-router-dom";
function Payment({ submitForm }) {
  const { tm,da,id,price } = useParams();
  const { handleChange, values, handleSubmit, errors } = useForm(submitForm,validate);
  return (
    <div className="form-content-left">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Payment</h1>
        <div className="payment-wrap">
          <h2>Please insert card details</h2>
          <div className="form-inputs">
            <label htmlFor="Cardholder-name" className="form-label">
               Cardholder name
            </label>
            <div>
            <select className="Cardholder" id="type" values={values.type} onChange={handleChange}>
              <option value="visa">Visa</option>
              <option value="mastercard">Master Card</option>
              <option value="unionpay">Union Pay</option>
              <option value="jcb">JCB</option>
            </select>
          </div>
          </div>
                  
          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              Card number
            </label>
            <input
              id="Cardnumber"
              type="Cardnumber"
              name="Cardnumber"
              className="form-input"
              placeholder="Cardnumber"
              value={values.Cardnumber}
              onChange={handleChange}
            />
            {errors.Cardnumber && <p>{errors.Cardnumber}</p>}
          </div>
          <div className="form-inputs-1">
          <div>
            <label htmlFor="mmyy" className="form-label">
               MM/YY
            </label>
            <input
              id="mmyy"
              type="mmyy"
              name="mmyy"
              className="form-input-1"
              placeholder="mmyy"
              value={values.mmyy}
              onChange={handleChange}
            />
            {errors.mmyy && <p>{errors.mmyy}</p>}
            </div>

            <div>
            <label htmlFor="cvv" className="form-label">
                CVV/CVV2
            </label>
            <input
              id="cvv"
              type="cvv"
              name="cvv"
              className="form-input-1"
              placeholder="cvv"
              value={values.cvv}
              onChange={handleChange}
            />
            {errors.cvv && <p>{errors.cvv}</p>}
            </div>



            {/* {errors.password2 && <p>{errors.password2}</p>} */}
          </div>
         
           <button className="form-input-btn" type="submit">
            Purchase {price} THB
          </button>
          <Link to={`/getticket/${id}`}  style={{ textDecoration: 'none' }} >
            
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Payment;
