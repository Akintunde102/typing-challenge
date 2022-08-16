import React from 'react';
import type { NextPage } from 'next'
import styles from '../styles/gen.module.css'
import { Duration, Stage } from '../types';
import { showStage } from '../utils';
import CustomDuration from './custom-duration';

const PAGE_STAGE: Stage = 2;

interface StageTwoProps {
    presentStage: Stage;
    setDuration: (duration: Duration) => void;
    setStage: (stage: Stage) => void;
}

const StageTwo: NextPage<StageTwoProps> = ({ presentStage, setDuration, setStage }: StageTwoProps) => {

    const [showCustomDuration, setShowCustomDuration] = React.useState<boolean>(false);

    const handleDurationPick = (d: Duration) => {
        setDuration(d);
        setStage(PAGE_STAGE);
    }

    if (showStage(presentStage, PAGE_STAGE)) {
        return (
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Pick Duration
                </h1>

                <code className={styles.code}>Pick the Duration Below</code>

                <div className={styles.grid}>

                    <div onClick={() => handleDurationPick(1)} className={styles.card}>
                        1min
                    </div>
                    <div onClick={() => handleDurationPick(2)} className={styles.card}>
                        2mins
                    </div>
                    <div onClick={() => handleDurationPick(5)} className={styles.card}>
                        5mins
                    </div>
                    <div onClick={() => setShowCustomDuration(true)} className={styles.card}>
                        Set Custom Duration
                    </div>
                </div>
                <CustomDuration showCustomDuration={showCustomDuration} handleDurationPick={handleDurationPick} />
            </main >)
    }

    return null;
}

export default StageTwo;
