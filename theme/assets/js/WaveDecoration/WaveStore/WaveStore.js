import Wave from '../Wave/Wave';
import WaveGenerator from '../Generator/WaveGenerator';

class WavesStore {
    constructor() {
        this.smallWave = new Wave(45, 'small', 7);
        this.bigWave = new Wave(45, 'big', 9);
        this.tags = [
            { id: 0, elements: document.getElementsByTagName('h1'), waveType: this.smallWave },
            { id: 1, elements: document.getElementsByTagName('h2'), waveType: this.smallWave },
            { id: 2, elements: document.getElementsByClassName('ks-decoration'), waveType: this.bigWave },
        ];
    }
    
    render() {
        return this.tags.map(types => {
            const wave = new WaveGenerator(types.waveType, types.elements);
            return wave.generatorinit();
        })
    }
}

export default WavesStore;