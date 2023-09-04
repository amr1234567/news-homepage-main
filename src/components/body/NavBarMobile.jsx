import Links from "../NavBar/link";
const NavBarMobile = (prop) => {
    return (
        <div className="all-page">
            <div className="fake-div"></div>
            <div className="nav-bar-mobile" data-view-component="true">
                <i onClick={prop.handleNavBar} className="fa-solid fa-xmark special"></i>
                <div className="links">
                    {
                prop.data.map((item,index) => (
                    <Links key={index} item ={ item } />  
                ))
                }
                </div>
            </div>
            
        </div>
    );
}

export default NavBarMobile;