import '../styles/input.css'

function Article(props) {
    return (
        <>
            <article className="pt-10">
                <div className="size mx-auto">
                    <h2 className="text-4xl text-center">{props.titulo}</h2>
                    <h3 className='text-center'>{props.fecha}</h3>
                    <div className='max-w-96 mx-auto my-5'>
                        {props.imagen}
                    </div>
                    <p>
                        {props.info}
                    </p>
                </div>
            </article>
        </>
    );
}

export default Article