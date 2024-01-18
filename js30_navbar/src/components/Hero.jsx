import { styles } from "../styles";
import { heroimage, alternativelogo, capterralogo } from "../assets";


const Hero = () => {
  return (
    <div>
      <section
        id="home"
        className={`flex md:flex-row flex-col justify-between md:items-center ${styles.paddingY}`}
      >
        <div className="flex-row">
            <h1 className="flex-1 font-bold md:text-[72px] text-[36px] text-black md:leading-[84px] leading-[44px]">
                Ondeck is your remote<br className="md:block hidden" />{" "}
                <span className="text-heroYellow">conference calling tool</span>
            </h1>
            <p className={`${styles.paragraph} max-w-[800px] my-3 sm:my-5`}>
                Ondeck is a service that allows you to create 
                beautiful, online, and encrypted video calls for you 
                and your remote team.
            </p>
            <button className={styles.buttonGreen}>Try for free</button>
            <div className="flex justify-start items-center mt-6 sm:mt-8">
                <p className={`${styles.paragraph} pr-5`}>5.0 rating based on reviews from: </p>
                <img src={capterralogo} alt="capterra" className="pr-3"/>
                <img src={alternativelogo} alt="alternative" />
            </div>
        </div>
        <div className="hidden md:block max-w-[400px]">
            <img src={heroimage} alt="heroimage"/>
        </div>
      </section>
    </div>
  );
};

export default Hero