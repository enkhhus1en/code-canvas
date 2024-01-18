import './index.css';
import { styles } from './styles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';

function App() {
  return (
    <div className="bg-primary w-full h-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Clients />
        </div>
      </div>
    </div>
  );
}

export default App;
