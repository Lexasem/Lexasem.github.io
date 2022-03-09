import {SignalLight} from "../lib/signal-light/signal-light.js";
import {CycleIterator} from "../lib/utils.js";

const container = document.querySelector('.signal');

const config = [
    {duration: 3000, lightOptions: {container: container, color: 'red'}},
    {duration: 800, lightOptions: {container: container, color: 'orange', blinkTimes: 0}},
    {duration: 5000, lightOptions: {container: container, color: 'green'}},
];

const run = async () => {
    const iterator = new CycleIterator(config.map(conf => new SignalLight(conf)));
    let current = iterator.current();

    while (true) {
        await current.beginPhase();
        current = iterator.next();
    }
}
run();