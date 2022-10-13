import styles from './lessons.module.css'
import topics from './datas'

const Lessons = () =>{
    return(
        <>
        <h1>Principais aprendizados: </h1>
              
        <div className={styles.iconlessons}>
            {topics.map(topic => 
                <div>
                    <h1 key={topic.id}>
                        {topic.name}
                    </h1>
                    <p>
                        {topic.description}
                    </p>
                    <div>
                    <img alt={topic.name} src={topic.image}/>
                    </div>
                </div>
            )
            }
        </div>
        </>
        
    )
}

export default Lessons