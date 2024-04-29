import Article from "../components/article";

function threeArticle() {
    return (
        <>
            <Article 
                titulo='Finanzas Estrategicas' 
                fecha='1 Enero 2024' 
                imagen='/binance.png'
                info='Un estrategia financiera es de vital importancia' 
            >
                <p>En Latinoamérica, la educación financiera suele ser un tema ausente, lo que genera grandes brechas sociales y limita las oportunidades de crecimiento personal y económico. Sin embargo, tomar el control de tus finanzas personales puede tener un impacto transformador en tu vida, sin importar si tus ingresos son del salario mínimo.</p>
                <p className="mt-[30px] mb-[5px] text-xl"><b>¿Por qué es importante la educación financiera en Latinoamérica?</b></p>
                <ul className="list-disc pl-[50px]">
                    <li><b>Estabilidad económica: </b>Te permite cubrir tus necesidades básicas, tener un fondo de emergencia y planificar tu futuro.</li>
                    <li><b>Tranquilidad mental: </b>Reduce el estrés y la ansiedad que genera la incertidumbre financiera.</li>
                    <li><b>Libertad financiera: </b>Te da la posibilidad de alcanzar tus metas y sueños, como comprar una casa, viajar o iniciar un negocio.</li>
                    <li><b>Impacto social: </b>Te permite contribuir al bienestar de tu familia y comunidad.</li>
                </ul>
                <p className="mt-[30px] mb-[5px] text-xl"><b>¿Cómo mejorar tus finanzas personales, incluso con ingresos bajos?</b></p>
                <ol className="list-decimal pl-[50px]">
                    <li>
                        <b>Invierte en ti mismo: </b>La mejor inversión que puedes hacer es en ti mismo. Dedica tiempo y dinero a aprender cosas nuevas, desarrollar tus habilidades y mejorar tu conocimiento. Esto te permitirá aumentar tu valor en el mercado laboral y obtener mejores oportunidades de ingresos.
                        <ul className="list-disc pl-[50px]">
                            <li><b>Cursos online: </b>Hay una gran variedad de cursos online gratuitos y de bajo costo en plataformas como Coursera, edX y Udemy.</li>
                            <li><b>Libros de autoayuda y finanzas personales: </b>Leer libros sobre estos temas te ayudará a desarrollar una mentalidad positiva y aprender estrategias para mejorar tus finanzas.</li>
                            <li><b>Talleres y conferencias: </b>Asistir a talleres y conferencias sobre finanzas personales te permitirá aprender de expertos y conocer a otras personas con intereses similares.</li>
                        </ul>
                    </li>
                    <li><b>Crea un presupuesto y controla tus gastos: </b>Anota todos tus ingresos y gastos, y clasifícalos en categorías como necesidades básicas, ahorros e inversiones. Esto te ayudará a identificar dónde puedes ahorrar dinero y tomar decisiones financieras más inteligentes.</li>
                    <li><b>Reduce tus deudas: </b>Las deudas pueden consumir una gran parte de tus ingresos, por lo que es importante reducirlas lo antes posible. Haz un plan para pagar tus deudas con mayor rapidez, como el método de la bola de nieve o la avalancha de deudas.</li>
                    <li><b>Ahorra, incluso si es poco: </b>Empieza por ahorrar pequeñas cantidades de forma regular. Incluso si solo puedes ahorrar $10 o $20 a la semana, a largo plazo esto puede generar una diferencia significativa.</li>
                    <li><b>Busca formas de aumentar tus ingresos: </b>Si es posible, busca formas de aumentar tus ingresos, como un trabajo extra, un emprendimiento o una inversión que genere ingresos pasivos.</li>
                    <li>
                        <b>Invierte en un portafolio diversificado: </b>Una vez que tengas un fondo de emergencia y hayas reducido tus deudas, puedes empezar a invertir en un portafolio diversificado. Esto te ayudará a proteger tu dinero de la inflación y a aumentar tus ingresos a largo plazo.
                        <ul className="list-disc pl-[50px]">
                            <li><b>Fondos de inversión: </b>Los fondos de inversión son una forma sencilla de invertir en una variedad de activos, como acciones, bonos y bienes raíces.</li>
                            <li><b>Acciones: </b>Invertir en acciones puede ser una forma de obtener altos rendimientos, pero también implica un mayor riesgo.</li>
                            <li><b>Bienes raíces: </b>Invertir en bienes raíces puede ser una forma de generar ingresos pasivos y construir patrimonio.</li>
                        </ul>
                    </li>
                </ol>
                <p className="mt-[30px] mb-[5px] text-xl"><b>Recursos Adicionales:</b></p>
                <ul className="list-disc pl-[50px]">
                    <li>
                        <a href="https://www.youtube.com/watch?v=B1F5Sf_oFB0" target="_BLANK" className="text-blue-600">Cómo manejar el dinero como el 1%?</a>
                    </li>
                    <li>
                    <a href="https://www.youtube.com/watch?v=f2O4Q-T12FI" target="_BLANK" className="text-blue-600">Cómo crear un presupuesto personal?</a>
                    </li>
                    <li>
                    <a href="https://www.youtube.com/watch?v=ZJYBd1pZJZY" target="_BLANK" className="text-blue-600">5 lecciones de finanzas personales</a>
                    </li>
                </ul>
            </Article>
        </>
    );
};

export default threeArticle