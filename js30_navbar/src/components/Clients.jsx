import { netflixlogo, shopifylogo, spotifylogo, walmartlogo } from "../assets"
import { styles } from "../styles"

const Clients = () => {
    return <div className={`py-[50px]`}>
        <p className={`text-center ${styles.paragraph}`}>
            Trusted by 3+ million people at companies like
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-5 justify-items-center md:px-[72px] gap-5 md:gap-0">
            <img src={netflixlogo} alt="netflix" />
            <img src={shopifylogo} alt="shopify" />
            <img src={spotifylogo} alt="spotify" />
            <img src={walmartlogo} alt="walmart" />
        </div>
    </div>
}

export default Clients