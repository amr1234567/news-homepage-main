import Card from "./Card";
const CardsSection = () => {
    const data = [
        ['Reviving Retro PCs', ' What happens when old PCs are given modern upgrades?','/assets/images/image-gaming-growth.jpg'],
        ['Top 10 Laptops of 2022', 'Our best picks for various needs and budgets.','/assets/images/image-retro-pcs.jpg'],
        ['The Growth of Gaming','How the pandemic has sparked fresh opportunities.','/assets/images/image-top-laptops.jpg']
    ];
    return (
        <div className="cards-section">
            {data.map((item,index) => (
                <Card key={index} main={item[0]} secondary={item[1]} num={`0${index+1}`} img={item[2]}></Card>
            ))}
        </div>
    );
}
export default CardsSection;