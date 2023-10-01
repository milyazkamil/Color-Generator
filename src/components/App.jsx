import { useState } from "react";
import ColorList from "./ColorList";
import SelectColorForm from "./SelectColorForm";
import { ToastContainer, toast } from 'react-toastify';
import Values from 'values.js';


function App() {
  const [colors, setColors] = useState(new Values('#00ffe1').all(10));

  const addColor = (color) => {
    try {
      let newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(`Oops! ${error.message}`);
    }
  };

  return (
    <>
      <main id="main" className="">
        <SelectColorForm addColor={addColor} />
        <ColorList colors={colors} />
        <ToastContainer position="top-center" />
      </main>
    </>
  )
}
export default App;