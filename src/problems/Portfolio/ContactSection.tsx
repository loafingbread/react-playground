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
                alt="Discord"
                height={36}
                width={36}
              />
            </a>
            <a className={styles.socialMediaLink} href="/">
              <img
                className={styles.socialMediaIcon}
                src={DribbleIcon}
                alt="Discord"
                height={36}
                width={36}
              />
            </a>
            <a className={styles.socialMediaLink} href="/">
              <img
                className={styles.socialMediaIcon}
                src={InstagramIcon}
                alt="Discord"
                height={36}
                width={36}
              />
            </a>
            <a className={styles.socialMediaLink} href="/">
              <img
                className={styles.socialMediaIcon}
                src={BehanceIcon}
                alt="Discord"
                height={36}
                width={36}
              />
            </a>
          </div>
        </div>
      </div>
      <ContactForm onSubmit={submitForm} />
    </section>
  );
}

type ContactFormProps = {
  onSubmit: () => void;
};

function ContactForm(props: ContactFormProps) {
  return (
    <form className={styles.contactForm} onSubmit={props.onSubmit}>
      <div className={styles.formField}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          autoComplete="name"
          required
          aria-required={true}
        />
      </div>
      <div className={styles.formField}>
        <label htmlFor="name">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          required
          aria-required={true}
          aria-describedby="email-hint"
        />
        <span id="email-hint" className={styles.formFieldHint}>
          We'll never share your email.
        </span>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactSection;
