import { styles } from "../styles";

const Hero = () => {
  return (
    <div>
      <section id="hero" className={`${styles.paddingY}`}>
        <div className="max-w-[800px] flex-col">
          <h1 className="text-white font-heading text-[32px] leading-[44px] md:text-[48px] md:leading-[58px] lg:text-[64px] lg:leading-[76px] mb-2">
            Helping companies build better, scalable software.
          </h1>
          <p className={`${styles.paragraph}`}>
            Award-winning web developer and author, with over 15+ years of
            working experience with Fortune 500 companies like Apple, Google,
            Facebook and more.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
