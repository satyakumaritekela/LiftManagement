import { LiftSystem } from "./components/LiftSystem";
import { StateProvider } from "./context/context";

function App() {

  return (
    <StateProvider>
      <LiftSystem />
    </StateProvider>
  );
}

export default App;
