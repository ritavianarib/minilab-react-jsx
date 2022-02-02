import "bootstrap/dist/css/bootstrap.min.css";
import {Greeting} from "./Greeting/index";
import {Profile} from "./Profile/index";
import image1 from "../assets/images/puppy.jpg"; 
import {ToDoList} from "./ToDoList/index";
import {EmotionMeter} from "./EmotionMeter/EmotionMeter"

// Não se esqueça de importar os componentes!

function App() {
  return (
    <div className="container mt-5 mb-5 col-6">
      {/* Não se esqueça de invocar seus componentes aqui! */
      <>
        <small>Interpolação de variáveis</small>
        <Greeting/>

        <small>Imagens</small>
        <hr />
        <Profile
          image={image1}
          title="Cute Puppy"
          description="Lorem ipsum dolor sit amet. consectetur adipiscing elit. Phasellus iaculis dignissim neque,nec sodales sem porttitor facilisis.
           Morbi vitae elit eget turpis ultrices ullamcorper."
        />

        <small>Renderização de listas</small>
        <hr />

        <ToDoList/>

        <small>Renderização condicional</small>
      <hr />
      <EmotionMeter type = "SAD"/>
     
     </>
      }
      
      
    </div>
  );
}

export default App;
