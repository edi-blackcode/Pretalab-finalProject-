import { useState, useEffect } from 'react'
import Title from '../../components/title/Title'

function Home(){
  

    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await fetch ('https://api.github.com/users/edi-blackcode/repos')
            const data = await response.json()

            setRepositories(data)

        }
        getData()
    })

    return(
        <>
        <div>
        <Title text="Home"/>
        </div>
        <Title text="Acesse os repositórios e conheça meus projetos" />
        {repositories.map(item => {
            return(
                <div key={item.id}>
                  <h3>{item.name}</h3>  
                  <p>{item.description}</p>
                  <a href={item.html_url}>See repo</a>
                </div>
            )
        })}
        </>

    )
   

}

export default Home