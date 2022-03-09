import {Light} from "../light/light.js";
import {sleep} from "../utils.js";

/**
 *
 * @param {{duration?: number, lightOptions: LightOptions}} options
 * @constructor
 */
export function SignalLight(options) {
    const duration = options.duration ?? 1000;
    const light = new Light(options.lightOptions);

    this.beginPhase = async () => {
        light.turnOn();
        await sleep(duration);
        await light.blink();
    }
}