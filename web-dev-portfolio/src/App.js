import { styles } from "./styles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

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
    </div>
  );
}

export default App;
