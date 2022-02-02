import styles from "./styles.module.css";



function ToDoList (props) {
    const tasks = [
        "Fazer compras",
        "Renovar CNH",
        "Pagar contas",
        "Estudar React",
        "Fazer Minilab",
      ];

    return ( 
    <>
        <ul className={styles.listGroup}>
           {tasks.map((eTask, index) => {
            return (<li key={index}> 
            <input type="checkbox"/>
                {eTask} 
            </li>)
           }) }
        </ul>

    </>

    )
};

export {ToDoList}

