import { walmart, jpmorgan, visa, tinder, samsung, verizon } from "../assets";
import { styles } from "../styles";

const Clients = () => {
  return (
    <div>
      <section
        id="clients"
        className={`grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row lg:justify-between lg:items-center justify-items-center gap-2 pt-3 sm:pt-8 pb-16`}
      >
        <img src={walmart} alt="walmart" className="py-2" />
        <img src={jpmorgan} alt="jpmorgan" className="py-2" />
        <img src={visa} alt="visa" className="py-2" />
        <img src={tinder} alt="tinder" className="py-2" />
        <img src={samsung} alt="samsung" className="py-2" />
        <img src={verizon} alt="verizon" className="py-2" />
      </section>
    </div>
  );
};

export default Clients;
