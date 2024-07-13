import classes from './styles/MainHead.module.scss'

export default function MainHead() {
    
  return (
    <section className={classes.container}>
        <div className={classes.content}>
            <h1 className={classes.title}>Заказать <span className={classes.contentWord1}>изи <br/></span>просто заполни <span className={classes.contentWord2}>форму</span>!</h1>
            <p className={classes.text}>Заполняй форму, мы вам отпишем в течении суток для уточнения деталей</p>
            <a href="#" className={classes.topButton}>Заполнить форму</a>
        </div>
    </section>
  )
}
