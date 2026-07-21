import React from "react";
import styles from "./ContactSection.module.css";
import DiscordIcon from "../../assets/portfolio/discord.svg";
import BehanceIcon from "../../assets/portfolio/behance.svg";
import DribbleIcon from "../../assets/portfolio/dribbble.svg";
import FacebookIcon from "../../assets/portfolio/facebook.svg";
import InstagramIcon from "../../assets/portfolio/nstagram.svg";

type ContactData = {
  name: string;
  email: string;
};

function ContactSection() {
  const submitForm = () => {
    console.log("Submit Contact Form: ");
  };

  return (
    <section className={styles.contactSection} aria-label="Contact Section">
      <h2 className={styles.contactSectionHeader}>Lets work together</h2>
      <div className={styles.contactSectionContents}>
        <div className={styles.contactInformation}>
          <p className={styles.contactSectionDescription}>
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com This is a template Figma file, turned into code
            using Anima. Learn more at AnimaApp.com
          </p>
          <div className={styles.contactSocialMedias}>
            <a className={styles.socialMediaLink} href="/">
              <img
                className={styles.socialMediaIcon}
                src={DiscordIcon}
                alt="Discord"
                height={36}
                width={36}
              />
            </a>
            <a className={styles.socialMediaLink} href="/">
              <img
                className={styles.socialMediaIcon}
                src={FacebookIcon}
                alt="Facebook"
                height={36}
                width={36}
              />
            </a>
            <a className={styles.socialMediaLink} href="/">
              <img
                className={styles.socialMediaIcon}
                src={DribbleIcon}
                alt="Dribble"
                height={36}
                width={36}
              />
            </a>
            <a className={styles.socialMediaLink} href="/">
              <img
                className={styles.socialMediaIcon}
                src={InstagramIcon}
                alt="Instagram"
                height={36}
                width={36}
              />
            </a>
            <a className={styles.socialMediaLink} href="/">
              <img
                className={styles.socialMediaIcon}
                src={BehanceIcon}
                alt="Behance"
                height={36}
                width={36}
              />
            </a>
          </div>
        </div>
        <ContactForm onSubmit={submitForm} />
      </div>
    </section>
  );
}

type ContactFormProps = {
  onSubmit: () => void;
};

function ContactForm(props: ContactFormProps) {
  return (
    <form className={styles.contactForm} onSubmit={props.onSubmit}>
      <section className={styles.formFields}>
        <article className={styles.formField}>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="name"
            required
            aria-required={true}
          />
        </article>
        <article className={styles.formField}>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            required
            aria-required={true}
            aria-describedby="email-hint"
          />
          {/* <span id="email-hint" className={styles.formFieldHint}>
          We'll never share your email.
        </span> */}
        </article>
      </section>
      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
}

export default ContactSection;
