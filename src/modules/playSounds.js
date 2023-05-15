import sound1 from '../audios/sleighbells.wav';
import sound2 from '../audios/xmassong.wav';

const playSound2 = () => {
    const audio2 = new Audio(sound1);
    audio2.play();
};
const playSound = () => {
    const audio = new Audio(sound2);
    audio.play();
};

export { playSound, playSound2 };