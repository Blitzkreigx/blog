import '../styles/input.css'

function Article(props) {
    return (
        <>
            <article className="pt-10">
                <div className="size mx-auto">
                    <div className='mb-[50px]'>
                        <h2 className="text-4xl text-center">{props.titulo}</h2>
                        <h3 className='text-center'>{props.fecha}</h3>
                    </div>
                    {/* Imagen alusiva al tema del posteo */}
                    {/* <div className='max-w-96 mx-auto my-5'>
                        <img src={props.imagen} alt={props.titulo} className='mx-auto' />
                    </div> */}
                    <div>
                        {props.children}
                    </div>
                </div>
            </article>
        </>
    );
}

export default Article