import styles from './lessons.module.css'
import topics from './datas'

const Lessons = () =>{
    return(
        <>
        <h1>Principais aprendizados: </h1>
              
        <div>
            {topics.map(topic => 
                <div>
                    <h1 key={topic.id}>
                        {topic.name}
                    </h1>
                    <p>
                        {topic.description}
                    </p>
                    <div className={styles.iconlessons} >
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