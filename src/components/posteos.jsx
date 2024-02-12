import { Link } from "react-router-dom";

function Posteo(props) {
    return (
        <>
            <div className="text-start posteo">
                <Link to="post">
                    <div className="overflow-hidden posteo-image">
                        <img src={props.imagen} alt="alternativa" className="w-full"/>
                    </div>
                </Link> 
                <p className="px-2 text-sm">{props.fecha}</p>
                <h3 className="px-2 text-lg pb-2 mt-5">{props.titulo}</h3>
                <p className="px-2">{props.info}</p>
            </div>
        </>
    );
}

export default Posteo