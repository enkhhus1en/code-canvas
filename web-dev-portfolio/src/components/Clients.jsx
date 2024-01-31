import { walmart, jpmorgan, visa, tinder, samsung, verizon } from "../assets";
import { styles } from "../styles";

const Clients = () => {
  return (
    <div>
      <section
        id="clients"
        className={`grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row lg:justify-between lg:items-center gap-2 pb-6 sm:pb-16`}
      >
        <img src={walmart} alt="walmart" />
        <img src={jpmorgan} alt="jpmorgan" />
        <img src={visa} alt="visa" />
        <img src={tinder} alt="tinder" />
        <img src={samsung} alt="samsung" />
        <img src={verizon} alt="verizon" />
      </section>
    </div>
  );
};

export default Clients;
