import classes from './styles/CardsTop.module.scss'

export default function CardsTop() {

  return (
    <section className={classes.section}>
        <div className={classes.leftCards}>
                <div className={classes.leftCard}>
                    <img src="img/Man Technologist.svg" alt=""/>
                    <h3 className={classes.leftCardTitle}>качественно?</h3>
                    <p className={classes.leftCardText}>Мы стремимся к развитию и качеству во всем, что делаем.</p>
                </div>
                <div className={classes.leftCard}>
                    <img src="img/Handshake.svg" alt=""/>
                    <h3 className={classes.leftCardTitle}>дорого?</h3>
                    <p className={classes.leftCardText}>Расскажите о нас своим друзьям и получите выгодную скидку!</p>
                </div>
                <div className={classes.leftCard}>
                    <img src="img/Thinking Face.svg" alt=""/>
                    <h3 className={classes.leftCardTitle}>с чего начать?</h3>
                    <p className={classes.leftCardText}>Мы продумаем дизайн и логику для вашего сайта или бота!</p>
                </div>
            </div>
            <div className={classes.rightCards}>
                <div className={classes.rightCard}>
                    <img src="img/profile_1.png" alt=""/>
                    <h3 className={classes.rightCardTitle}>Вася</h3>
                    <p className={classes.rightCardText}>Full Stack Developer</p>
                </div>
                <div className={classes.rightCard}>
                    <img src="img/profile_2.png" alt=""/>
                    <h3 className={classes.rightCardTitle}>Петя</h3>
                    <p className={classes.rightCardText}>Python Developer</p>
                </div>
                <div className={classes.rightCard}>
                    <img src="img/profile_3.png" alt=""/>
                    <h3 className={classes.rightCardTitle}>Саня</h3>
                    <p className={classes.rightCardText}>Python Developer</p>
                </div>
            </div>
    </section>
  )
}
