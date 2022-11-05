import Footer from "./Footer";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.title}>Contact Me</h1>
        <p className={classes.subtext}>
          Hi there, contact me to ask me about anything you have in mind.
        </p>

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
