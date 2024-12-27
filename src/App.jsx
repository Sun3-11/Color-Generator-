import Values from "values.js";
import ColorList from "./assets/components/ColorList";
import Form from "./assets/components/Form";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));
  console.log(new Values("#f15025").all(10));

  const addColor = (color) => {
    try {
      let newColor = new Values(color).all(10);
      setColors(newColor);
    } catch (error) {
      toast.error("Invalid color");
    }
  };
  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
