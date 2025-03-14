import React from 'react'
import { Formik ,Form , Field ,ErrorMessage } from "formik";
import * as Yup from 'yup';

let validation = Yup.object({
  name: Yup.string()
        .min(2,"string is too short")
        .max(10, "name is too long")
        .required("name is required"),
  email : Yup.string()
        .email()
        .required()
})

const handleSubmit = (value , {resetForm}) =>{
  console.log("form submitted" , value);
   resetForm()
}
// let a = 10;
function App() {

  return (
    <div>
      <h1>Form deployed CI/CD</h1>
      <Formik 
        initialValues={{name:"" , email:""}}
        validationSchema={validation}
        onSubmit={handleSubmit}
      >
        {
          ({isSubmitting}) =>(
            <Form>
             <Field type="text" name="name"/>
            <ErrorMessage component='p' name='name' style={{color:"red"}}/>
             <Field type="text" name="email"/>
            <ErrorMessage component='p' name='email' style={{color:"red"}}/>
             <button type='submit'>submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}

export default App
