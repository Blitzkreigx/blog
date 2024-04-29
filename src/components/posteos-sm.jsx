import { Link } from "react-router-dom";

function PosteoSm(props) {
    return (
        <>
            <div className="text-start posteo-sm">
                <Link to={props.article}>
                    <div className="overflow-hidden posteo-image-sm">
                        <img src={props.imagen} alt={props.titulo} className="w-full"/>
                    </div>
                </Link>
                <h3 className="px-2 text-lg pb-2 mt-5"><b>{props.titulo}</b></h3>
                <p className="px-2">{props.info}</p>
            </div>
        </>
    );
}

export default PosteoSm