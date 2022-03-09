import {sleep} from "../utils.js";

/**
 * A number, or a string containing a number.
 * @typedef {{container: Element, blinkTimes?: number, blinkDelay?: number, color?: string, idleColor?: string}} LightOptions
 */

/**
 *
 * @param {LightOptions} options
 * @constructor
 */
export function Light(options) {
    const defaultOptions = {
        container: undefined,
        blinkTimes: 3,
        blinkDelay: 500,
        color: 'green',
        idleColor: 'gray'
    };

    const config = Object.assign(defaultOptions, options);

    if (config.container === undefined) {
        throw new Error('options.container is not defined');
    }

    const el = document.createElement('div');
    el.classList.add('light');
    el.style.backgroundColor = config.idleColor;
    config.container.appendChild(el);
    let isOn = false;


    this.turnOn = () => {
        if (isOn) {
            return;
        }
        el.style.backgroundColor = config.color;
        isOn = true;
    }

    this.turnOff = () => {
        if (!isOn) {
            return;
        }
        el.style.backgroundColor = config.idleColor;
        isOn = false;
    }

    this.toggle = () => {
        if (isOn) {
            this.turnOff();
        } else {
            this.turnOn();
        }
    }

    this.blink = async () => {
        if (config.blinkTimes <= 0) {
            this.turnOff();
            return;
        }

        for (let i = 0; i < config.blinkTimes * 2; i++) {
            this.toggle();
            await sleep(config.blinkDelay);
        }
        this.turnOff();
    }
}