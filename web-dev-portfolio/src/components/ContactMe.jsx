import { styles } from "../styles";
import GetInTouch from "./GetInTouch";

const ContactMe = () => {
  return (
    <div>
      <section
        id="contactme"
        className={`${styles.paddingY} grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12`}
      >
        <div>
          <h1 className="font-heading text-white text-[28px] pb-6">
            Interested in working with me?
          </h1>
          <p className={`${styles.paragraph} pb-6`}>
            I'm active on all social media platforms listed below, but you can
            also send me an email and I will get back to you within 24-48 hours.
          </p>
          <GetInTouch />
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
