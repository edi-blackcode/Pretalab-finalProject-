import styles from './about.module.css'
import mindfulnessImg from '../../assets/mindfulness.svg'
function About() {
  return(
    <>
    <h1>All about me:</h1>
    <p>All I can say about me is that I'm a mother, a wife, a daughter, a tech student, a writer and a lot of others things more.</p>
    <p>I'm not good to introduce my self or talk about me but the picture below can say more than words I could use.</p>
    <p>I'm always looking for something magical in my life. And that's because I wanna keep my emotionanl behavior under control. Let's meditate!</p>
    <img className={styles.picMeditation}src={mindfulnessImg}/>
    <p>God bless you!</p>
    </>
  )
}

export default About


/*function Name(props) {
    return(
      <p>{props.children}</p>
    )
  }
  
  export default Name*/