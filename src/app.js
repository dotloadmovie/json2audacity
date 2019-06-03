import artists from './data/artists'

class App{
    process() {
        let currTime = 0;

        artists.map((track) => {
            const obj = Object.assign({}, track);

            obj.seconds = this.parseDuration(track.duration);
            console.log(this.formatString(obj, currTime))
            currTime = currTime + obj.seconds;
            
        });
    }

    formatString(obj, currTime) {
        return `${currTime}.000000\t${currTime + obj.seconds}.000000\t${obj.artist} - ${obj.title}`;
    }

    parseDuration(dur) {
        let durSplit = dur.split(':');
        let secs = parseInt(durSplit[1]);
        const mins = parseInt(durSplit[0]);

        return secs + (mins * 60);
    }

}

const app = new App();
app.process();