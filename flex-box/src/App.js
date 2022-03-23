import { useState } from "react";
import "./App.css";
import Box from "./components/Box";
import FlexContainer from "./components/FlexContainer";
import FlexDirectionSelector from "./components/FlexDirectionSelector";
import JustifyContentSelector from "./components/JustifyContentSelector";
import AlignItemsSelector from "./components/AlignItemsSelector";

const colors = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"];
const boxSize = 100;

function App() {
  const [flexDirection, setFlexDirection] = useState("row-reverse");
  const [justifyContent, setJustifyContent] = useState("flex-end");
  const [alignItems, setAlignItems] = useState("stretch");
  return (
    <div className="App">
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <h1>Flexbox Konfigurator</h1>
        <FlexDirectionSelector
          value={flexDirection}
          onChange={(value) => setFlexDirection(value)}
        />
        <JustifyContentSelector
          value={justifyContent}
          onChange={(value) => {
            console.log("JustifyContentSelector meldet eine Änderung!");
            console.log(`Wert: ${value}`);
            setJustifyContent(value);
          }}
        />
        <AlignItemsSelector
          value={alignItems}
          onChange={(value) => setAlignItems(value)}
        />

        <FlexContainer
          flexDirection={flexDirection}
          justifyContent={justifyContent}
          alignItems={alignItems}
        >
          {colors.map((color, index) => (
            <Box color={color} key={`boxList-${index}`} size={boxSize} />
          ))}
        </FlexContainer>
      </main>
    </div>
  );
}

export default App;
