import styles from "./styles.module.css";

let nome= "Rita"

function Greeting() {
    return ( 
    <>
        <p className={styles.Greeting}> Olá, {nome}! </p>
    </>

    )
};

export {Greeting}