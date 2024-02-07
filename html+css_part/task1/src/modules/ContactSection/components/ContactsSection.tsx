import styles from "./ContactsSection.module.scss";
import Container from "../../../components/Container/index";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";

function ContactsSection(): JSX.Element {
  return (
    <section className={styles.contactsSection}>
      <Container>
        <div className={styles.contentWrapper}>
          <h2 className={styles.header}>
            Stay up to date with the latest news <br></br> from the Startup
            world!
          </h2>

          <p className={styles.paragraphText}>
            Etiam volutpat ligula nec orci egestas, at porta massa tempor. Proin
            rutrum, purus <br></br> in convallis pharetra, risus leo sagittis.
          </p>

          <form className={styles.formContainer}>
            <Input text="Enter your email" type="email" />
            <Button classBtn="filledBtnPrimaryBigger" text="Subscribe" />
          </form>

          <small className={styles.formInstruction}>
            By clicking Subscribe you're confirming that you agree with our
            Terms and Conditions.
          </small>

          <img
            className={styles.image}
            src="/images/ContactsSection/image.svg"
            width="170"
            height="81"
            alt="Decor Image"
          ></img>
        </div>
      </Container>
    </section>
  );
}

export default ContactsSection;
