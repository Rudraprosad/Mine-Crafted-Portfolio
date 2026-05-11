import "./AudioToggleButton.scss";

import { useAudioStore } from "../../../Experience/stores/audioStore";
import {
  playSound,
  playBackgroundMusic,
  pauseBackgroundMusic,
} from "../../../utils/audioSystem";

const AudioToggleButton = () => {
  const { isAudioEnabled, setIsAudioEnabled } = useAudioStore();

  const toggleAudio = () => {
    if (isAudioEnabled) {
      pauseBackgroundMusic();
    } else {
      playBackgroundMusic();
    }
    setIsAudioEnabled(!isAudioEnabled);
  };

  return (
    <>
      <button
        onClick={() => {
          playSound("buttonClick");
          toggleAudio();
        }}
        className="audio-toggle-button"
      >
        {isAudioEnabled ? (
          <img src="/audio-on.svg" alt="Audio On" width="16" height="19" />
        ) : (
          <img src="/audio-off.svg" alt="Audio Off" width="18" height="19" />
        )}
      </button>
    </>
  );
};

export default AudioToggleButton;