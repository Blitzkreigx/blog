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
                <p>El éxito personalizado se refiere a la idea de que el concepto de éxito varía significativamente entre individuos, ya que está influenciado por sus valores, metas, experiencias de vida y circunstancias únicas. Lo que puede considerarse éxito para una persona puede no serlo para otra, ya que cada individuo tiene sus propias aspiraciones y definiciones de lo que significa alcanzar sus objetivos y encontrar satisfacción en la vida.</p>
            </Article>
        </>
    );
};

export default twoArticle