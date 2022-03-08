import style from './Contact.module.css'

const Contact = () => {

  return (
    <section id="contact" className={style.block}>
      <div className={style.wrapper}>
        <h1 className={style.title}>Contact Me</h1>
        <form className={style.form} name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <label className={style.label} for="name">Name</label>
          <input className={style.inputText} type="text" name="name" placeholder="Your name.." />
          <label className={style.label} for="email">Email</label>
          <input className={style.inputText} type="email" name="email" placeholder="Your email.." />
          <label className={style.label} for="message">Message</label>
          <textarea
            className={style.inputTextArea}
            name="message"
            placeholder="Write message.."
          ></textarea>
          <input className={style.inputSubmit} type="submit" value=">> Send Message" />
        </form>
      </div>
    </section>
  )
}

export default Contact