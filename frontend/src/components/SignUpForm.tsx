import { Form, Formik } from "formik";
import React, { useContext } from "react";
import * as Yup from "yup";
import { authInterface, userInterface } from "../types";
import TextInput from "./formikComponents/TextInput.tsx";
import { authContext } from "./contexts/authContext.tsx";
import { useNavigate } from "react-router-dom";

const SignUpForm: React.FC<{}> = () => {
    const { signup } = useContext<authInterface>(authContext);
    const navigate = useNavigate();
    
    const SignupSchema = Yup.object().shape({
        username: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Too Short!')
            .required('Required'),
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .email('Invalid Email')
            .required('Required'),        
    });
    
const initialValues: userInterface = { 
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
};
    
  return (
    <>
        <h1 className="mt-4">Sign Up!</h1>
        <Formik
            initialValues={initialValues}
            onSubmit={((values, { setSubmitting }) => {
                signup(values);
                setSubmitting(false);
                navigate('/');
            })}
            validationSchema={SignupSchema}
        >
            <Form className="d-flex flex-column col col-6 m-auto p-5 pt-3 border border-3 rounded border-secondary">
                <TextInput label="Username" name='username' type="text" />
                <TextInput label="Password" name='password' type="password" />
                <TextInput label="First Name" name='firstName' type="text" />
                <TextInput label="Last Name" name='lastName' type="text" />
                <TextInput label="Email" name='email' type="email" />

                <button className="btn btn-primary mt-2" type="submit">Submit</button>
            </Form>
            
        </Formik>
    </>
  )
}

export default SignUpForm