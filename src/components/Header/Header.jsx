import "./Header.scss";

const Header = ({headleft,headcenter,headright}) =>{
    return(
        <header className="header_wrapper">
            <div className="haedleft">{headleft}</div>   
            <div className="headcenter">{headcenter}</div>   
            <div className="headright">{headright}</div>   
            <hr/>
        </header>

    );
};

export default Header;