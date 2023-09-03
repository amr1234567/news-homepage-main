import MainSection from "./MainSection";
import NewsSection from "./NewsSection";
import CardsSection from "./CardsSection";

const Body = () => {
    return (
        <div className="body">
            <MainSection></MainSection>
            <NewsSection></NewsSection>
            <CardsSection></CardsSection>
        </div>
    );
}
 
export default Body;