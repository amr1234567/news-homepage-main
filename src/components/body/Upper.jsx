import Logo from "../NavBar/Logo";
const Upper = (prop) => {
    return (
        <div className="upper">
            <Logo />
            <i onClick={prop.handleNavBar} className={`fa-solid ${(prop.navOpened) ? "fa-xmark":"fa-bars"}`}></i>
        </div>
    );
}
 
export default Upper;