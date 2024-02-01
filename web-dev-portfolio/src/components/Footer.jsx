import { socials } from "../constants";

const Footer = () => {
  return (
    <div className="flex justify-between items-center py-6">
      <h1 className="text-white font-heading">Johnatan Specter</h1>
      <div className="flex justify-center items-center gap-2">
        {socials.map((social, index) => (
          <div key={`${social.id}_${index}`}>
            <img src={social.logo} alt={social.link} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
