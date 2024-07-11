import { Field, Form, Formik } from "formik";
import React from "react";
import { Button, Input, Label } from "reactstrap"

const SignUpForm = () => {
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }
    
  return (
    <Formik
        initialValues={{ username: ''}}
        onSubmit={((values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
        })}
    >
        <Form>
            <label htmlFor="username">Username</label>
            <Field id="username" name="username" type="text" />

            <button type="submit">Submit</button>
        </Form>
        
    </Formik>
  )
}

export default SignUpForm