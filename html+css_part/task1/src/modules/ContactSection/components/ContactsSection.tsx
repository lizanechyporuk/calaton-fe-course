import styles from "./ContactsSection.module.scss";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";

function ContactsSection(): JSX.Element {
  return (
    <section className={styles.contactsSection}>
      <div>
        <h2>
          Stay up to date with the latest news <br></br> from the Startup world!
        </h2>
        <p>
          Etiam volutpat ligula nec orci egestas, at porta massa tempor. Proin
          rutrum, purus <br></br> in convallis pharetra, risus leo sagittis.
        </p>
        <form>
          <Input text="Enter your email" />
          <Button text="Subscribe" />
        </form>
        <small>
          By clicking Subscribe you're confirming that you agree with our Terms
          and Conditions.
        </small>
        <img src="/images/ContactsSection/image.svg"></img>
      </div>
    </section>
  );
}
export default ContactsSection;
