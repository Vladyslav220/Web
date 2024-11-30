import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  FormWrapper,
  FormContainer,
  FieldContainer,
  Label,
  Input,
  SubmitButton
} from './Form.styled';
import { Container } from '../Container/Container';
import ErrorMessage from './ErrorMessage';
import { Notify } from 'notiflix';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/Cart/cartSlice';

// Validation schema
const validationSchema = Yup.object({
  firstName: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "First name should only contain letters")
    .min(2, "First name should be at least 2 characters")
    .required("First name is a required field"),
  lastName: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Last name should only contain letters")
    .required("Last name is a required field"),
  email: Yup.string()
    .matches(/^[\w-]+(\.[\w-]+)*@[\w-]+\.[a-z]{2,}$/, "Email must be a valid address")
    .required("Email is a required field"),
  phoneNumber: Yup.string()
    .matches(/^380\d{9}$/, "Phone number must be a valid Ukrainian number starting with 380")
    .required("Phone number is a required field"),
  cardNumber: Yup.string()
    .matches(/^\d{16}$/, "Card number must be exactly 16 digits")
    .required("Card number is a required field")
});

const FormComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleSubmit = (values) => {
    Notify.success('Your order was successfully added. Wait for a call!');
    navigate('/');
    dispatch(clearCart());
  };

  return (
    <FormWrapper>
      <Container>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            cardNumber: ''
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <FormContainer>
                <FieldContainer>
                  <Label>First Name</Label>
                  <Field name="firstName" as={Input} placeholder="Enter your first name" />
                  {errors.firstName && touched.firstName && <ErrorMessage message={errors.firstName} />}
                </FieldContainer>

                <FieldContainer>
                  <Label>Last Name</Label>
                  <Field name="lastName" as={Input} placeholder="Enter your last name" />
                  {errors.lastName && touched.lastName && <ErrorMessage message={errors.lastName} />}
                </FieldContainer>

                <FieldContainer>
                  <Label>Email</Label>
                  <Field name="email" type="email" as={Input} placeholder="Enter your email" />
                  {errors.email && touched.email && <ErrorMessage message={errors.email} />}
                </FieldContainer>

                <FieldContainer>
                  <Label>Phone Number</Label>
                  <Field name="phoneNumber" as={Input} placeholder="Enter your phone number" />
                  {errors.phoneNumber && touched.phoneNumber && <ErrorMessage message={errors.phoneNumber} />}
                </FieldContainer>

                <FieldContainer>
                  <Label>Card Number</Label>
                  <Field name="cardNumber" as={Input} placeholder="Enter your card number" />
                  {errors.cardNumber && touched.cardNumber && <ErrorMessage message={errors.cardNumber} />}
                </FieldContainer>

                <SubmitButton type="submit">Submit</SubmitButton>
              </FormContainer>
            </Form>
          )}
        </Formik>
      </Container>
    </FormWrapper>
  );
};

export default FormComponent;
