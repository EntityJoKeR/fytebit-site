import Head from "next/head";
import NavBar from "./NavBar";
import classes from './styles/MainContainer.module.scss'


export default function MainContainer({children, keywords}) {
  return (
    <>
    <Head>
        <meta keywords={keywords}></meta>
    </Head>
    
    <div className={classes.container}>
    <div className={classes.logo}>
                    <img className={classes.logo__image} src="./img/logo.svg" alt=""/>
                    <p className={classes.logo__text}>fytebit</p>
                </div>
        <NavBar/>
    </div>
    <div>{children}</div>

    </>
  )
}
