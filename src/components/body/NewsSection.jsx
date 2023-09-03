import New from "./New";
const NewsSection = () => {
    const data = [
        ['Hydrogen VS Electric Cars', 'Will hydrogen-fueled cars ever catch up to EVs?'],
        ['The Downsides of AI Artistry', 'What are the possible adverse effects of on-demand AI image generation?'],
        ['Is VC Funding Drying Up?','Private funding by VC firms is down 50% YOY. We take a look at what that means.']
    ]
    return (
        <div className="news-section">
            <h1>New</h1>
            {data.map((item, index) => (
                <div key={index}>
                    <New key={index} heading={item[0]} text={item[1]}></New>
                    {index !== data.length-1 && <hr/>}
                </div>
            ))}
            
        </div>
    );
}
 
export default NewsSection;