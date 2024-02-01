import { styles } from "../styles";

const Summary = () => {
  return (
    <div>
      <section
        id="summary"
        className={`${styles.paddingY} grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12`}
      >
        <div>
          <h1 className="font-heading text-white text-[28px] pb-6">
            A co-founder at one of the world's largest communities.
          </h1>
          <p className={`${styles.paragraph} pb-6`}>
            The combined experience I have at the top Fortune 500 companies has
            allowed me to develop a skillset that helps me in not just
            development, but in every aspect of any business.
          </p>
          <p className={`${styles.paragraph}`}>
            I'm proud to announce that I am now working at one of the world's
            largest communities teaching young minds about how to sell yourself
            as a developer and open them to a whole new world of opportunities.
          </p>
        </div>
        <div>
          <p className={`${styles.paragraph} pb-6`}>
            As a developer, you have everything available to you and all that's
            holding you back is yourself.
          </p>
          <p className={`${styles.paragraph} pb-6`}>
            A quote I live by perfectly illustrates what I mean.
          </p>
          <p className={`${styles.paragraph} pb-6`}>
            "How big would you dream, if you <strong>knew</strong> you wouldn't
            fail?" You've already gone through the hardest parts being a
            developer. It's time to elevate you skills and become a leader in
            something you're passionate about.
          </p>
          <p className={`${styles.paragraph}`}>
            I'm happy to chat over coffee some time about how I can help your
            company.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Summary;
