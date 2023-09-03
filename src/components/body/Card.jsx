const Card = (prop) => {
    return (
        <div className="card">
            <img src={prop.img} alt="" />
            <div className="content">
                <h3>{prop.num}</h3>
                <p className="main-p">{prop.main}</p>
                <p className="secondary-p">{prop.secondary}</p>
            </div>
        </div>
    );
}
 
export default Card;