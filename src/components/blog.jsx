import Posteo from './posteos'
import PosteoSm from './posteos-sm'

function BlogPost() {
    return (
        <>
            <section className="pt-6 md:grid md:grid-cols-2 screen gap-y-5">
                <div className="flex justify-center items-center">
                    <h2 className='text-4xl text-center'>"Cuanto más <span className='text-green-600'>das</span>, más <span className='text-green-600'>recibes</span>"</h2>
                </div>
                <div className="flex flex-col justify-center p-5">
                    <h1 className="mb-3 text-xl">Optimiza tu día a día con Octagon</h1>
                    <h2 className="text-3xl">El Portal número #1 en ofrecer contenido de calidad a nuestros usuarios de cualquier rama estudiantil o profesional que buscan mejorar su vida.</h2>
                </div>
            </section>
            <section className="px-5 py-8 text-center">
                <h2 className="text-3xl mb-3">Publicaciones relevantes</h2>
                <p className="center text-xl">Lee nuestros artículos más relevantes e importantes con los que podrás potenciar tus conocimientos en las materias más importantes de la vida.</p>
                <div className="py-20 w-full flex flex-wrap justify-center items-start gap-x-10 gap-y-20">
                    <div className="flex flex-col gap-5">
                        <Posteo imagen="/body.jpeg" titulo="ESCULPIENDO TU YO DESEABLE" fecha="1 Enero 2024" info="Para transformar tu vida, es esencial trabajar tanto en tu bienestar interno como externo. La clave radica en aprender genuinamente, evitando las charlatanerías. Un cambio auténtico requiere un compromiso serio con el crecimiento personal en todos los aspectos de tu ser." />
                    </div>
                    <div className="flex flex-col gap-5">
                        <PosteoSm imagen="/money.jpeg" titulo="EL ÉXITO ES DIFERENTE" fecha="1 Enero 2024" info="El éxito es la meta anhelada por cada individuo, pero va más allá de simplemente seguir un camino predefinido; implica forjar tu propio destino, sin importar cuáles sean tus deseos y aspiraciones." />
                    </div>
                    <div className="flex flex-col gap-5">
                        <Posteo imagen="/binance.png" titulo="FINANZAS ESTRATEGICAS" fecha="1 Enero 2024" info="En América Latina, las finanzas representan uno de los mayores desafíos. La solución a más del 50% de tus problemas radica en la mejora de tu situación financiera. Asegurar el control y la estabilidad en este aspecto puede marcar la diferencia significativa en tu calidad de vida y bienestar." />
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogPost