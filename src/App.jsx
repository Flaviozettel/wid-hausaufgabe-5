import "./App.css";
import { useState } from "react";
import { BasicTable } from "./Tabelle";
import { Titelleiste } from "./Titelleiste";
import data from "./data/tableData.json";

function App() {
  const [auswahlService2, setAuswahlService2] = useState("");
  const [auswahlAnbieter2, setAuswahlAnbieter2] = useState("");
  const [suchtext2, setSuchtext2] = useState("");
  return (
    <div className="App">
      <div className="titelseite-container">
        <Titelleiste
          onChangeService2={setAuswahlService2}
          onChangeAnbieter2={setAuswahlAnbieter2}
          onChangeSuchfenster2={setSuchtext2}
        />
        <br />

        <BasicTable
          auswahlService2={auswahlService2}
          auswahlAnbieter2={auswahlAnbieter2}
          suchtext2={suchtext2}
          data={data}
        />
      </div>
    </div>
  );
}

export default App;
