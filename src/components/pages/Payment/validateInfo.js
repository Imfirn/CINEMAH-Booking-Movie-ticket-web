export default function validateInfo(values) {
  let errors = {};

//   if (!values.username.trim()) {
//     errors.username = "Username required";
//   }

//   Email
  if (!values.mmyy) {
    errors.mmyy = "MM/YY required";
  } else if (!/^[0-9]+\/[0-9]/i.test(values.mmyy)) {
    errors.mmyy = "MM/YY is invalid";
  }

  if (!values.cvv) {
    errors.cvv = "cvv required";
  } else if (!/^[0-9]/i.test(values.cvv)) {
    errors.cvv = "cvv is invalid";
  }else if (values.cvv.length !== 3) {
    errors.cvv = "cvv needs to be 3 characters";
  }
  


  if (!values.Cardnumber) {
    errors.Cardnumber = "Cardnumber is required";
  } else if (values.Cardnumber.length !== 12) {
    errors.Cardnumber = "Cardnumber needs to be 12 characters ";
  }

  

  return errors;
}
