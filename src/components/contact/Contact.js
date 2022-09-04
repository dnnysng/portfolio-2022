import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion, AnimatePresence } from "framer-motion";

import style from "./Contact.module.css";

export default function Contact() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    // formats formik data to be used with netlify forms
    function encode(data) {
        return Object.keys(data)
            .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    // animation vars
    const variants = {
        initial: { scale: 0 },
        enter: {
            scale: 1,
            transition: {
                duration: 0.5,
            },
        },
        exit: {
            scale: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section className={style.block}>
            <AnimatePresence exitBeforeEnter initial={false}>
                {!formSubmitted ? (
                    <motion.div
                        key="contact"
                        className={style.container}
                        variants={variants}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                    >
                        <h1 className={style.title}>Contact Me</h1>
                        <Formik
                            initialValues={{ name: "", email: "", message: "" }}
                            validationSchema={Yup.object({
                                name: Yup.string().max(100, "Name must be 100 characters or less").required("Required"),
                                email: Yup.string()
                                    .email("Invalid email address")
                                    .required("Required")
                                    .max(70, "Email address must be 70 characters or less"),
                                message: Yup.string()
                                    .max(255, "Message must be 255 characters or less")
                                    .required("Required"),
                            })}
                            onSubmit={(values, actions) => {
                                fetch("/", {
                                    method: "POST",
                                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                                    body: encode({ "form-name": "contact", ...values }),
                                })
                                    .then(() => {
                                        setFormSubmitted(true);
                                        actions.resetForm();
                                    })
                                    .catch(() => {
                                        alert("Error");
                                    })
                                    .finally(() => actions.setSubmitting(false));
                            }}
                        >
                            <Form className={style.form}>
                                <div className={style.fieldContainer}>
                                    <label className={style.label} htmlFor="name">
                                        Name
                                    </label>
                                    <Field
                                        className={style.inputText}
                                        name="name"
                                        type="text"
                                        placeholder="Your name..."
                                    />
                                    <ErrorMessage className={style.errorMessage} component="span" name="name" />
                                </div>
                                <div className={style.fieldContainer}>
                                    <label className={style.label} htmlFor="email">
                                        Email
                                    </label>
                                    <Field
                                        className={style.inputText}
                                        name="email"
                                        type="email"
                                        placeholder="Your email..."
                                    />
                                    <ErrorMessage className={style.errorMessage} component="span" name="email" />
                                </div>
                                <div className={style.fieldContainer}>
                                    <label className={style.label} htmlFor="message">
                                        Message
                                    </label>
                                    <Field
                                        className={style.inputTextArea}
                                        name="message"
                                        as="textarea"
                                        placeholder="Your message..."
                                    />
                                    <ErrorMessage className={style.errorMessage} component="span" name="message" />
                                </div>

                                <button className={style.inputSubmit} type="submit">
                                    Send Message
                                </button>
                            </Form>
                        </Formik>
                    </motion.div>
                ) : (
                    <motion.div
                        key="thanks"
                        className={style.container}
                        variants={variants}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                    >
                        <h1 className={style.title}>Message Sent!</h1>
                        <p className={style.paragraph}>Thanks for reaching out.</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
