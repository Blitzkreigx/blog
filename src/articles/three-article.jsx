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
                <p>Las finanzas estratégicas se refieren a la gestión financiera que se enfoca en la toma de decisiones a largo plazo para maximizar el valor de una empresa. Esta disciplina implica el uso estratégico de los recursos financieros disponibles para alcanzar los objetivos y metas corporativas. En lugar de centrarse únicamente en aspectos financieros operativos, las finanzas estratégicas consideran cómo las decisiones financieras afectan la posición competitiva y la dirección futura de la empresa.</p>
            </Article>
        </>
    );
};

export default threeArticle