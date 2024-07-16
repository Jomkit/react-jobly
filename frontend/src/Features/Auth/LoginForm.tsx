import React, { useContext } from 'react';
import { sharedMethodsInterface, userInterface } from '../../types';
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
        <h1 className="mt-4">Login</h1>
        <Formik
            initialValues={initialValues}
            onSubmit={((values, { setSubmitting }) => {
                login(values);
                setSubmitting(false);
                navigate("/");
            })}
        >
            <Form className="d-flex flex-column col col-6 m-auto p-5 pt-3 border border-3 rounded border-secondary">
                <TextInput label="Username" name='username' type="text" />
                <TextInput label="Password" name='password' type="password" />

                <button className="btn btn-primary mt-2" type="submit">Submit</button>
            </Form>
            
        </Formik>
    </>
  )
}

export default LoginForm