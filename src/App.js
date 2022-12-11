import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
    const animals = ['cow', 'bird', 'cat', 'gator', 'dog', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

export default function App() {
  const [animals, setAnimals] = useState([]);

  function handleClick() {
    setAnimals([...animals, getRandomAnimal()]);
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className="p-3 border border-slate-400 bg-blue-400 rounded-md active:translate-y-1 transition duration-100 text-white"
      >
        Add Animal
      </button>

        { animals.map((animal, i) => {
            return (
                <AnimalShow type={animal} key={i}/>
            )
        }) }
    </div>
  );
}
