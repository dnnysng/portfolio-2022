// import { Formik, Field, Form, ErrorMessage } from 'formik'
// import * as Yup from 'yup'

import style from './Contact.module.css'

export default function Contact() {

  // formats formik data to be used with netlify forms
  // const encode = (data) => {
  //   return Object.keys(data)
  //     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  //     .join("&");
  // }

  return (
    <section id="contact" className={style.block}>
      <div className={style.container}>
        <h1 className={style.title}>Contact Me</h1>

        {/* <Formik
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
          onSubmit={(values, actions) => {
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ "form-name": "contact", ...values })
            })
              .then(() => {
                alert(`Message sent! I'll get back to you as soon as possible.`);
                actions.resetForm()
              })
              .catch(() => {
                alert('Error');
              })
              .finally(() => actions.setSubmitting(false))
          }}
        >
          <Form className={style.form}>
            <label className={style.label} htmlFor="name">Name</label>
            <Field className={style.inputText} name="name" type="text" placeholder="Your name..." />
            <ErrorMessage className={style.errorMessage} component="span" name="name" />

            <label className={style.label} htmlFor="email">Email</label>
            <Field className={style.inputText} name="email" type="email" placeholder="Your email..." />
            <ErrorMessage className={style.errorMessage} component="span" name="email" />

            <label className={style.label} htmlFor="message">Message</label>
            <Field className={style.inputTextArea} name="message" as="textarea" placeholder="Your message..." />
            <ErrorMessage className={style.errorMessage} component="span" name="message" />

            <button className={style.inputSubmit} type="submit">&gt;&gt; Send Message</button>
          </Form>
        </Formik> */}

        <form className={style.form} name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <label className={style.label} htmlFor="name">Name</label>
          <input className={style.inputText} type="text" name="name" placeholder="Your name.." required />
          <label className={style.label} htmlFor="email">Email</label>
          <input className={style.inputText} type="email" name="email" placeholder="Your email.." required />
          <label className={style.label} htmlFor="message">Message</label>
          <textarea
            className={style.inputTextArea}
            name="message"
            placeholder="Write message.."
            required
          ></textarea>
          <input className={style.inputSubmit} type="submit" value=">> Send Message" />
        </form>
      </div>
    </section>
  )
}