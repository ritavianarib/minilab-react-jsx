import styles from "./styles.module.css";

function Profile (props) {
    return ( 
    <>
        <div className={styles.card}>
        <img src={props.image} className= {styles.cardImgTop} alt="Dog"/>
            <div className={styles.cardBody}>
            <h5 className={styles.cardTitle}> {props.title} </h5>
            <p className={styles.cardText}>{props.description}</p>
            </div>
        </div>

    </>

    )
};

export {Profile}