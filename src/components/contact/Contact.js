import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import style from './Contact.module.css'

export default function Contact() {

  return (
    <section id="contact" className={style.block}>
      <div className={style.container}>
        <h1 className={style.title}>Contact Me</h1>

        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(100, 'Name must be 100 characters or less')
              .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required')
              .max(70, 'Email address must be 70 characters or less'),
            message: Yup.string()
              .max(255, 'Message must be 255 characters or less')
              .required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className={style.form}>
            <Field type="hidden" name="form-name" value="contact" />
            <label className={style.label} htmlFor="name">Name</label>
            <Field className={style.inputText} name="name" type="text" />
            <ErrorMessage className={style.errorMessage} component="span" name="name" />

            <label className={style.label} htmlFor="email">Email</label>
            <Field className={style.inputText} name="email" type="email" />
            <ErrorMessage className={style.errorMessage} component="span" name="email" />

            <label className={style.label} htmlFor="message">Message</label>
            <Field className={style.inputTextArea} name="message" as="textarea" />
            <ErrorMessage className={style.errorMessage} component="span" name="message" />

            <button className={style.inputSubmit} type="submit">&gt;&gt; Send Message</button>
          </Form>
        </Formik>

        {/* <form className={style.form} name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <label className={style.label} htmlFor="name">Name</label>
          <input className={style.inputText} type="text" name="name" placeholder="Your name.." />
          <label className={style.label} htmlFor="email">Email</label>
          <input className={style.inputText} type="email" name="email" placeholder="Your email.." />
          <label className={style.label} htmlFor="message">Message</label>
          <textarea
            className={style.inputTextArea}
            name="message"
            placeholder="Write message.."
          ></textarea>
          <input className={style.inputSubmit} type="submit" value=">> Send Message" />
        </form> */}
      </div>
    </section>
  )
}