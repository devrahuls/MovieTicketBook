import { BrowserRouter, Routes, Route } from "react-router-dom";
import cardData from "./data.json";
import Cards from "./components/cards";
import Form from "./components/form"
import Summary from "./components/summary"


function App() {
  const cards = cardData.map((item) => {
    return <Cards
              key={item.show.id}
              {...item}
          />
  });


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {cards}/>
      <Route path="/form" element = {<Form />}/>
      <Route path="/summary" element = {<Summary />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
