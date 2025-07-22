import { useState } from "react";
import TrafficLight from "./components/TrafficLight";
import ControlPanel from "./components/ControlPanel";

function App() {
  const [currentLight, setCurrentLight] = useState("red");
  const [mode, setMode] = useState("manual");

  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-center bg-amber-50">
      <h1 className="text-4xl font-bold mb-2">🔦 Lumo</h1>
      <p className="text-gray-600 mb-8 text-lg">
        A playful traffic light simulator
      </p>

      <TrafficLight currentLight={currentLight} />
      <ControlPanel
        onChangeLight={setCurrentLight}
        mode={mode}
        setMode={setMode}
      />
    </div>
  );
}

export default App;
