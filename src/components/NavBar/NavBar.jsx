import Links from "./link";
import Logo from "./logo";
const NavBar = (prop) => {
    return (
        <div className="nav-bar">
            <Logo></Logo>
            <div className="links">
                {
                prop.data.map((item,index) => (
                    <Links key={index} item ={ item } />  
                ))
                }
            </div>
            
        </div>
    );
}
 
export default NavBar;