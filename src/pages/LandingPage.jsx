import MainPage from "../Components/MainPage";
import ServicePage from "../Components/ServicePage";
import MarketPage from "../Components/MarketPage";
import CryptoPage from "../Components/CryptoPage";
import FooterPage from "../Components/FooterPage"
export const LandingPage = () => {
    return (
        <div>
            <MainPage />
            <ServicePage />
            <MarketPage />
            <CryptoPage />
            <FooterPage />
        </div>
    )
}
