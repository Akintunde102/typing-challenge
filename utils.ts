import { Duration, Score, Stage, TimeDetails } from "./types";

export const showStage = (presentStage: Stage, pageStage: Stage) => {

    if (presentStage === pageStage - 1) {
        return true;
    }

    return false;

}

export const convertTimeToMilliSeconds = (min: number): number => min * 60 * 1000;

export const reformatTime = (timeDetails: TimeDetails<number>): string => {

    const { hours, minutes, seconds } = { hours: padWithZero(timeDetails.hours), minutes: padWithZero(timeDetails.minutes), seconds: padWithZero(timeDetails.seconds) };

    if (isZero(hours)) {
        return `${minutes}:${seconds}`;
    }


    if (isZero(hours) && isZero(minutes)) {
        return `${seconds}`;
    }

    return `${hours}:${minutes}:${seconds}`;
}

export const isZero = (str: string) => parseInt(str) === 0;

export const padWithZero = (num: number) => {
    const str = String(num);
    if (str.length === 1) {
        return `0${str}`;
    }

    return str;
}


export const getTimeDetails = (countDown: number): TimeDetails<number> => {
    const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);


    return { hours, minutes, seconds };
}


export const calculateScore = (text: string, textInput: string, durationInMin: Duration) => {

    if (durationInMin === 0) {
        throw ("Duration cannot be 0");
    }

    const allWordInputs = textInput.split(" ");
    const allCorrectWords = text.split(" ");
    let score = 0;
    let speed = 0;

    for (let i = 0; i < allCorrectWords.length; i++) {
        const correctWord = allCorrectWords[i];
        const inputWord = allWordInputs[i];
        if (correctWord === inputWord) {
            score++;
        }
    }

    speed = score / durationInMin;
    return { points: score, speed: parseInt(speed.toFixed(2)) }
}