import React, { useContext } from 'react';
import { sharedMethodsInterface, userInterface } from '../../types.ts';
import { Form, Formik } from 'formik';
import TextInput from '../../components/formikComponents/TextInput';
import { sharedMethodsContext } from '../../components/contexts/sharedMethodsContext';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC<{}> = () => {
    const { login } = useContext<sharedMethodsInterface>(sharedMethodsContext);
    const navigate = useNavigate();
    
    const initialValues: Partial<userInterface> = {
        username: '',
        password: ''
    }
    
  return (
    <>
        <h1 className="mt-4 text-white">Login</h1>
        <Formik
            initialValues={initialValues}
            onSubmit={((values, { setSubmitting }) => {
                login(values);
                setSubmitting(false);
                navigate("/");
            })}
        >
            <Form className="d-flex flex-column col col-6 m-auto p-5 pt-3 bg-white border border-3 border-black rounded">
                <TextInput label="Username" name='username' id='username' type="text" />
                <TextInput label="Password" name='password' id='password' type="password" />

                <button className="btn btn-primary mt-2" type="submit">Submit</button>
            </Form>
            
        </Formik>
    </>
  )
}

export default LoginForm