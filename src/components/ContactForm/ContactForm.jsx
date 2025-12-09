import { useId } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { object, string } from "yup";

import styles from "./ContactForm.module.css";

const contactSchema = object({
    name: string()
        .min(3, "Too short")
        .max(50, "Too long")
        .required("Required"),

    number: string()
        .matches(/^[0-9]+$/, "Only digits allowed")
        .min(3, "Too short")
        .max(50, "Too long")
        .required("Required"),
});

export default function ContactForm({ onSubmit }) {
    const nameId = useId();
    const numberId = useId();
    const onSubmitHandler = (values, actions) => {
        onSubmit({
            id: nanoid(),
            name: values.name,
            number: values.number,
        });

        actions.resetForm();
    };
    return (
        <Formik
            initialValues={{
                name: "",
                number: "",
            }}
            onSubmit={onSubmitHandler}
            validationSchema={contactSchema}
        >
            <Form className={styles.container}>
                <label htmlFor={nameId}>
                    Name
                    <Field id={nameId} name="name" />
                    <ErrorMessage className={styles.error} name="name" component="span" />
                </label>
                <label htmlFor={numberId}>
                    Number
                    <Field id={numberId} name="number" />
                    <ErrorMessage className={styles.error} name="number" component="span" />
                </label>
                <button className={styles.button} type="submit">
                    Add contact
                </button>
            </Form>
        </Formik>
    );
}
