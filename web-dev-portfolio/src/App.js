import { styles } from "./styles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Projects from "./components/Projects";
import Summary from "./components/Summary";
import ContactMe from './components/ContactMe';
import Footer from "./components/Footer";

function App() {
  // 1. Navbar
  // 2. Hero
  // 3. Clients
  // 4. Projects
  // 5. Summary
  // 6. ContactMe
  // 7. Footer

  return (
    <div className="bg-primary w-full">
      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Clients />
        </div>
      </div>
      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Projects />
        </div>
      </div>
      <div className={`${styles.flexCenter} ${styles.paddingX} bg-customgray`}>
        <div className={`${styles.boxWidth}`}>
          <Summary />
        </div>
      </div>
      <div className={`${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <ContactMe />
        </div>
      </div>
      <div className={`${styles.flexCenter} ${styles.paddingX} bg-customgray`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
