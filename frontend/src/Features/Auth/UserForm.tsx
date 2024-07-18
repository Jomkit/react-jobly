import { Form, Formik } from "formik";
import * as Yup from "yup";
import { userInterface } from "../../types.ts";
import TextInput from "../../components/formikComponents/TextInput.tsx";
import { useNavigate } from "react-router-dom";

const initialState: userInterface = {
    username: "",
    password: "", 
    firstName: "", 
    lastName: "", 
    email: "",
    applications: []
}

const UserForm = ({pageTitle, handleSubmit, defaultValues = initialState}: { pageTitle: string, handleSubmit: Function, defaultValues?: userInterface }) => {
    const navigate = useNavigate();
    
    let SignupSchema = ( pageTitle.toLowerCase().includes("edit") ?
        Yup.object().shape({
            username: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
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
        })
        :
        Yup.object().shape({
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
    }))
    
  return (
    <>
        <h1 className="mt-4 text-white">{pageTitle}</h1>
        <Formik
            initialValues={defaultValues}
            onSubmit={((values, { setSubmitting }) => {
                handleSubmit(values);
                setSubmitting(false);
                navigate('/');
            })}
            validationSchema={SignupSchema}
        >
            <Form className="d-flex flex-column col col-6 m-auto p-5 pt-3 border border-3 rounded border-dark bg-white">
                {pageTitle.toLowerCase().includes("edit") ?
                <>
                    <TextInput label="Username" name='username' id='username' type="text" />
                </>
                :
                <>
                    <TextInput label="Username" name='username' id='username' type="text" />
                    <TextInput label="Password" name='password' id='password' type="password" />
                </>
                }
                <TextInput label="First Name" name='firstName' id='firstName' type="text" />
                <TextInput label="Last Name" name='lastName' id="lastName" type="text" />
                <TextInput label="Email" name='email' id="email" type="email" />
                {
                    pageTitle.toLowerCase().includes("edit") ?
                    <button className="btn btn-primary mt-2" type="submit">Save Changes</button>
                    :
                    <button className="btn btn-primary mt-2" type="submit">Submit</button>

                }
            </Form>
            
        </Formik>
    </>
  )
}

export default UserForm