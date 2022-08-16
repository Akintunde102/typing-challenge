import React from 'react';
import type { NextPage } from 'next'
import styles from '../styles/gen.module.css'
import { Stage } from '../types';
import { showStage } from '../utils';
import DurationTimer from './duration-timer';

const PAGE_STAGE: Stage = 3;


interface StageThreeProps {
    setStage: (stage: Stage) => void;
    presentStage: Stage;
    handleTextInput: (s: string) => void;
    text: string;
    duration: number;
}

const StageThree: NextPage<StageThreeProps> = ({ presentStage, setStage, text, duration, handleTextInput }: StageThreeProps) => {

    const [start, setStart] = React.useState(false);

    if (showStage(presentStage, PAGE_STAGE)) {

        if (!start) {
            return (
                <main className={styles.main}>
                    <h1 onClick={() => setStart(true)} className={styles.bigButton}>
                        Start Challenge
                    </h1>
                </main >
            )
        }

        return (
            <main className={styles.main}>

                <div className={styles.section}>
                    <h1 className={styles.title}>
                        <DurationTimer time={duration} onZero={() => setStage(-1)} />
                    </h1>
                </div>


                <div className={styles.section}>
                    <code className={styles.textToType}>{text} </code>
                </div>

                <div className={styles.section}>
                    <p>
                        Type Highlighted Text In the Green Box Below
                    </p>
                    <textarea autoFocus onChange={handleTextInput} className={styles.typeInto} />
                </div>

            </main >)
    }

    return null;
}

export default StageThree;
