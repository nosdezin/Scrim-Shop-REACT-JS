import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import Card from "./components/Card";

function App() {
  const [values, setValues] = useState();
  const [listGames, setListGames] = useState([]);

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then((resp) => {
      console.log(resp);
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((resp) =>
      setListGames(resp.data)
    );
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Scrim Shop</h1>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          onChange={handleChangeValues}
        />
        <input
          type="text"
          name="cost"
          placeholder="Preço"
          onChange={handleChangeValues}
        />
        <input
          type="text"
          name="category"
          placeholder="Categoria"
          onChange={handleChangeValues}
        />
        <button onClick={() => handleClickButton()}>Cadastrar</button>
      </div>

      {typeof listGames !== "undefined" &&
        listGames.map((value) => (
          <Card
            key={value.id}
            listCard={listGames}
            setListCard={setListGames}
            id={value.id}
            name={value.name}
            cost={value.cost}
            category={value.category}
          />
        ))}
    </div>
  );
}

export default App;
