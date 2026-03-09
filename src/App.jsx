import "./App.scss";
import Experience from "./Experience/Experience";
import Modal from "./components/About/Modal/Modal";
import AudioToggleButton from "./components/About/AudioToggleButton/AudioToggleButton";
import LoadingScreen from "./components/About/LoadingScreen/LoadingScreen";
import InfoButton from "./components/About/InfoButton/InfoButton";

function App() {
  return (
    <>
      <LoadingScreen />
      <AudioToggleButton />
      <InfoButton />
      <Modal />
      <Experience />
    </>
  );
}

export default App;