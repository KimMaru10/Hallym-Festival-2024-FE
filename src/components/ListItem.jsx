import { useNavigate } from "react-router-dom";
import "./Listitem.scss";

const ListItem = ({title,body,id,url})=>{
    return(
        <div className="ListItem">

                    
                <div className="item"> 
                    <img src={url}/>
                    <div className="text">
                        <div>{title}</div>
                        <div>{body}</div>
                    </div>

            </div>


        </div>
    );
};


export default ListItem;

