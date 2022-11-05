import Footer from "./Footer";
import classes from "./Contact.module.css";
import Input from "./Input";

const Contact = () => {
  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.title}>Contact Me</h1>
        <p className={classes.subtext}>
          Hi there, contact me to ask me about anything you have in mind.
        </p>

        <div className={classes["name-container"]}>
          <Input
            label="First Name"
            type="text"
            placeholder="Enter your first name"
            className={classes.nameField}
            classNameC={classes.div}
            classNameL={classes.label}
            classNameI={classes.input}
            id="first name"
          />

          <Input
            label="Last Name"
            type="text"
            placeholder="Enter your last name"
            className={classes.nameField}
            classNameC={classes.div}
            classNameL={classes.label}
            classNameI={classes.input}
            id="last name"
          />
        </div>

        <Input
          label="Email"
          type="email"
          placeholder="yourname@email.com"
          classNameC={classes.div}
          classNameL={classes.label}
          classNameI={classes.input}
          id="email"
        />

        <div className={classes.div}>
          <label htmlFor="message" className={classes.label}>
            Message
          </label>
          <textarea
            className={classes.input}
            placeholder="Send me a message and I'll reply you as soon as possible"
            id="message"
          />
        </div>

        <div className={classes["checkbox-container"]}>
          <input type="checkbox" name="" id="checkbox" />
          <label htmlFor="checkbox">
            You agree to providing your data to Khadijah who may contact you.
          </label>
        </div>

        <button className={classes["submit-btn"]}>Send message</button>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
