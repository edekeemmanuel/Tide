// Render Prop
import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

const Forms = (props) => (
  const [name, setName] = useState(false)
  <div className="">
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          {
            
          }
          <Field className="border-2 w-full hover:border-neutral-500 border-neutral-500 bg-transparent py-[10px] focus:border-neutral-50 focus-within:border-neutral-50 px-3 w-full placeholder:text-sm placeholder:text-neutral-50" type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />
          <Field className="mt-5 border-2 w-full hover:border-neutral-500 border-neutral-500 bg-transparent  py-[10px] focus:border-neutral-50 focus-within:border-neutral-50 px-3 w-full placeholder:text-sm placeholder:text-neutral-50" type="password" name="password" placeholder="Password"/>
          <ErrorMessage name="password" component="div" />
          <button className=" bg-white border-[#0F172B] border-2 text-[#0F172B]  hidden md:block" type="submit" disabled={isSubmitting}>
            <Link to="/dashboard">Login</Link>
          </button>
        </Form>
      )}
    </Formik>
    <p>By clicking 'Login' you agree to our Terms of Use and Privacy Policy</p>
  </div>
);

export default Forms;


