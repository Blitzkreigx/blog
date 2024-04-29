import Article from "../components/article";

function twoArticle() {
    return (
        <>
            <Article 
                titulo='El Éxito Es Diferente' 
                fecha='1 Enero 2024' 
                imagen="/money.jpeg" 
                info='El éxito depende de tí y no de nadie más' 
            >
                <p className="my-[20px]">En un mundo digitalizado donde las redes sociales son parte integral de nuestra vida, la percepción del éxito se ha visto transformada. A diario, nos encontramos expuestos a una avalancha de imágenes y mensajes que muestran los logros y metas alcanzadas por otros, lo que puede generar comparaciones poco saludables y una distorsión de la definición personal del éxito.</p>
                <p className="my-[20px]">Es importante recordar que las redes sociales son solo una ventana a una parte de la realidad. Lo que se muestra en estas plataformas suele ser una versión idealizada y editada de la vida de las personas, obviando los obstáculos, las dificultades y los fracasos que también forman parte del camino hacia el éxito.</p>
                <p className="my-[20px]">El efecto de las redes sociales en la búsqueda del éxito puede ser tanto positivo como negativo. Por un lado, pueden servir como fuente de inspiración y motivación, permitiéndonos conectar con personas que comparten nuestros intereses y objetivos. Además, pueden ser una herramienta útil para difundir nuestro trabajo, proyectos y logros.</p>
                <p className="my-[20px]">Sin embargo, el uso excesivo o desmedido de las redes sociales también puede tener consecuencias negativas. La comparación constante con los demás puede generar sentimientos de inferioridad, frustración e incluso ansiedad. Además, la presión por mantener una imagen perfecta en las redes sociales puede llevarnos a descuidar otros aspectos importantes de nuestra vida.</p>
                <p className="my-[20px]">Para navegar en la era de las redes sociales sin que estas afecten negativamente nuestra búsqueda del éxito, es fundamental ser consciente de la naturaleza artificial y selectiva de lo que se muestra en estas plataformas. Debemos establecer límites claros en el tiempo que dedicamos a las redes sociales y evitar compararnos con los demás, enfocándonos en nuestro propio camino y progreso.</p>
                <p className="my-[20px]">En definitiva, el éxito en la era de las redes sociales se trata de encontrar un equilibrio entre la inspiración que estas pueden ofrecer y la necesidad de mantener una perspectiva realista y personal de nuestros propios objetivos y logros.</p>
                <p><b>Emprende tu propio viaje hacia el éxito, sin dejarte llevar por las falsas expectativas de las redes sociales.</b></p>
                <p className="mt-[30px] mb-[5px] text-xl"><b>Recuerda</b></p>
                <ul className="list-disc pl-[50px]">
                    <li>El éxito es subjetivo y personal.</li>
                    <li>El desarrollo personal es clave para alcanzar el éxito.</li>
                    <li>El éxito no es un destino final, sino un viaje.</li>
                    <li>El éxito no es lineal.</li>
                    <li>El éxito no es sinónimo de felicidad.</li>
                </ul>
                <p className="mt-[30px] mb-[5px] text-xl"><b>Recursos Adicionales:</b></p>
                <ul className="list-disc pl-[50px]">
                    <li>
                        <a href="https://www.youtube.com/watch?v=Fh_o0JsPByw" target="_BLANK" className="text-blue-600">Lecciones de Éxito</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=MwsUv6eEybs" target="_BLANK" className="text-blue-600">5 pasos para tener éxito en tu 20s</a>
                    </li>
                </ul>
                <p className="mt-[30px] mb-[5px] text-xl"><strong>Esto solo son recuros que a mí me han servido, pero recuerda, nadie es igual a nadie y lo que desees conseguir se basará en tu propia desición</strong></p>
            </Article>
        </>
    );
};

export default twoArticle