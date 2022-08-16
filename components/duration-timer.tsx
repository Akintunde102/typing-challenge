import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { getTimeDetails, convertTimeToMilliSeconds, reformatTime } from '../utils';

interface DurationTimerProps {
    time: number;
    onZero: () => void;
}

const DurationTimer: NextPage<DurationTimerProps> = ({ time, onZero }: DurationTimerProps) => {

    const timeInMilliSeconds = convertTimeToMilliSeconds(time);

    const [timeDetails, setTimeDetails] = useState(getTimeDetails(timeInMilliSeconds));
    const [countDown, setCountDown] = useState(timeInMilliSeconds);
    useEffect(() => {
        if (countDown === 0) {
            onZero()
        }

        const interval = setInterval(() => {
            const decrementedCountedDown = countDown - 1000;
            const { hours, minutes, seconds } = getTimeDetails(decrementedCountedDown);
            setTimeDetails({ hours, minutes, seconds });
            setCountDown(decrementedCountedDown);
        }, 1000);
        return () => clearInterval(interval);
    }, [countDown]);

    return (
        <div> {reformatTime(timeDetails)} </div>
    )

}


export default DurationTimer;
