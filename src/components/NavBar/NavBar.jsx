import Links from "./link";
import Logo from "./logo";
const NavBar = () => {
    const links = ['Home', 'New', 'Popular', 'Trending', 'Categories'];
    return (
        <div className="nav-bar">
            <Logo></Logo>
            <div className="links">
                {
                links.map((item,index) => (
                    <Links key={index} item ={ item } />  
                ))
                }
            </div>
            
        </div>
    );
}
 
export default NavBar;