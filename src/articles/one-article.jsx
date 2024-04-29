import Article from "../components/article";

function oneArticle() {
    return (
        <>
           <Article 
                titulo='Esculpiendo Tu Yo Deseable' 
                fecha='1 Enero 2024' 
                imagen='/body.jpeg' 
            > 
                <p><b className="text-lg">Lo primero que debes saber: </b>Alcanzar la forma física que deseas requiere dedicación, constancia y paciencia. No existen fórmulas mágicas ni resultados inmediatos, pero con el enfoque correcto, puedes lograr grandes cambios.</p>
                <p className="mt-[30px] mb-[5px] text-xl"><b>Claves fundamentales para esculpir tu cuerpo:</b></p>
                <ul className="list-disc pl-[50px]">
                    <li><b>Descanso: </b>Dormir al menos 7-8 horas por noche es crucial para la recuperación muscular y el correcto funcionamiento del organismo.</li>
                    <li><b>Alimentación: </b>Entrenamiento físico regular y progresivo. Busca un plan de ejercicios acorde a tus objetivos y condición física. Puedes optar por rutinas de musculación con pesas, máquinas o ejercicios de peso corporal. Si te gusta la variedad, puedes combinar diferentes tipos de entrenamiento como crossfit, HIIT o entrenamiento funcional.</li>
                    <li><b>Gimnasio: </b>Dieta balanceada y nutritiva, rica en proteínas, frutas y verduras. Evita alimentos procesados y azúcares en exceso. Planifica tus comidas con anticipación y lleva snacks saludables para evitar tentaciones.</li>
                    <li><b>Salud Mental: </b>Gestionar el estrés y mantener una actitud positiva son aspectos esenciales para el bienestar general y el éxito en tu camino hacia tus objetivos. Practica técnicas de relajación como meditación o yoga, y rodéate de personas que te apoyen.</li>
                </ul>
                <p className="mt-[30px] mb-[5px] text-xl"><b>Opciones de entrenamiento adicionales:</b></p>
                <ul className="list-disc pl-[50px]">
                    <li><b>Boxeo: </b>Un deporte completo que te ayuda a mejorar tu condición cardiovascular, quemar calorías y tonificar todo el cuerpo. Además, te enseña técnicas de autodefensa y aumenta tu confianza en ti mismo.</li>
                    <li><b>MMA (Artes Marciales Mixtas): </b>Combinan técnicas de diferentes disciplinas como boxeo, kickboxing, lucha y jiu-jitsu brasileño. Un entrenamiento intenso y exigente que te permite desarrollar fuerza, resistencia, flexibilidad y agilidad.</li>
                </ul>
                <p><b>Importante: </b>La elección entre boxeo y MMA dependerá de tus objetivos específicos y preferencias personales. Si buscas un entrenamiento completo que te ayude a mejorar tu condición cardiovascular, tonificar tu cuerpo y aprender técnicas de autodefensa, el boxeo puede ser una buena opción. Si buscas un entrenamiento más exigente que te permita desarrollar fuerza, resistencia y flexibilidad, las MMA pueden ser una mejor alternativa.</p>
                <p className="mt-[30px] mb-[5px] text-xl"><b>Recursos Adicionales:</b></p>
                <ul className="list-disc pl-[50px]">
                    <li>
                        <a href="https://www.youtube.com/@AndresVazquezPersonalTrainer/featured" target="_BLANK" className="text-blue-600">Andres Vazquez Personal Trainer</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@teocravenna" target="_BLANK" className="text-blue-600">Teo Cravenna</a>
                    </li>
                </ul>
            </Article>
        </>
    );
};

export default oneArticle