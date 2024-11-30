import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import FormError from '../FormError/formerror';
import './checkout.css';

const Checkout = () => {
    const navigate = useNavigate();

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '+380', // Початкове значення з кодом країни
        address: ''
    };

    // Валідація з Yup
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄ]+$/, 'Тільки літери')
            .max(20, 'Максимум 20 символів')
            .required('Ім’я обов’язкове'),
        lastName: Yup.string()
            .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄ]+$/, 'Тільки літери')
            .max(20, 'Максимум 20 символів')
            .required('Прізвище обов’язкове'),
        email: Yup.string()
            .email('Некоректна адреса електронної пошти')
            .required('Email обов’язковий'),
        phoneNumber: Yup.string()
            .matches(/^\+380\d{9}$/, 'Формат: +380 та 9 цифр')
            .required('Номер телефону обов’язковий'),
        address: Yup.string().required('Адреса обов’язкова')
    });

    // Відправка форми
    const onSubmit = (values) => {
        console.log('Form data', values);
        navigate('/success');
    };

    // Обробка зміни значення в полі телефону, обмежуючи введення до 9 цифр після "+380"
    const handlePhoneChange = (event, setFieldValue) => {
        let value = event.target.value;
        // Перевірка на початок з "+380" та введення тільки цифр після "+380"
        if (value.startsWith('+380')) {
            const digitsAfterCode = value.slice(4); // Отримуємо цифри після "+380"
            // Обрізаємо, якщо цифр більше 9 після "+380"
            if (digitsAfterCode.length <= 9 && /^\+380\d*$/.test(value)) {
                setFieldValue('phoneNumber', value);
            }
        }
    };

    return (
        <div className="checkout-container">
            <h2>Оформлення замовлення</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ setFieldValue }) => (
                    <Form>
                        <div>
                            <label>Ім’я</label>
                            <Field type="text" name="firstName" />
                            <ErrorMessage name="firstName" component={FormError} />
                        </div>
                        <div>
                            <label>Прізвище</label>
                            <Field type="text" name="lastName" />
                            <ErrorMessage name="lastName" component={FormError} />
                        </div>
                        <div>
                            <label>Email</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component={FormError} />
                        </div>
                        <div>
                            <label>Номер телефону</label>
                            <Field
                                type="text"
                                name="phoneNumber"
                                onChange={(event) => handlePhoneChange(event, setFieldValue)}
                            />
                            <ErrorMessage name="phoneNumber" component={FormError} />
                        </div>
                        <div>
                            <label>Адреса</label>
                            <Field type="text" name="address" />
                            <ErrorMessage name="address" component={FormError} />
                        </div>
                        <button type="submit" className="checkout-button">Підтвердити замовлення</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Checkout;
