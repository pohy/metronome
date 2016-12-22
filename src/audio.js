class Audio {
    init = () => {
        return new Promise((resolve, reject) => {
            try {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                this.context = new AudioContext();
                this.fetchBeat()
                    .then((beatBuffer) => this.beatBuffer = beatBuffer)
                    .catch(reject);
            } catch (error) {
                reject(error);
            }
        });
    }

    fetchBeat = () => {
        return fetch('/samples/SabHHXEvo20_Bell10.WAV')
            .then((res) => res.arrayBuffer())
            .then((buffer) => this.context.decodeAudioData(buffer));
    }

    createAudioSource = (arrayBuffer) => {
        const source = this.context.createBufferSource();
        source.buffer = arrayBuffer;
        source.connect(this.context.destination);
        return source;
    }

    playBeat = () => {
        this.createAudioSource(this.beatBuffer).start(0);
    }
}

export default Audio;
