import React, { useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/gen.module.css'
import { texts } from '../resources/text'
import { Duration, Score, Stage } from '../types';
import StageOne from '../components/stage-one';
import StageTwo from '../components/stage-two';
import StageThree from '../components/stage-three';
import GameOver from '../components/game-over';
import { calculateScore } from '../utils';


const Start: NextPage = () => {

    const [text, setText] = React.useState<string>(texts[0]);
    const [textInput, setTextInput] = React.useState('');
    const [duration, setDuration] = React.useState<Duration>(1);
    const [presentStage, setStage] = React.useState<Stage>(0);
    const [scores, setScores] = React.useState<Score>({ points: 0, speed: 0 });

    useEffect(() => {
        if (presentStage === -1) {
            const score = calculateScore(text, textInput, duration);
            setScores(score);
        }

    }, [text, presentStage]);


    const handleTextInput = (e: any) => {
        const value = e.target.value;
        setTextInput(value);
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Start Game</title>
                <meta name="description" content="Start Your Game" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <StageOne setText={setText} setStage={setStage} presentStage={presentStage} />
            <StageTwo setDuration={setDuration} setStage={setStage} presentStage={presentStage} />
            <StageThree handleTextInput={handleTextInput} duration={duration} text={text} setStage={setStage} presentStage={presentStage} />
            <GameOver presentStage={presentStage} scores={scores} />
        </div >
    )
}

export default Start;
