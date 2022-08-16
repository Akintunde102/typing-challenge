import React from 'react';
import type { NextPage } from 'next'
import styles from '../styles/gen.module.css'
import { Score, Stage } from '../types';
import { useRouter } from 'next/router';

const PAGE_STAGE: Stage = -1;

interface GameOverProps {
    presentStage: Stage;
    scores: Score;
}

const GameOver: NextPage<GameOverProps> = ({ presentStage, scores }: GameOverProps) => {

    const router = useRouter()
    if (presentStage === PAGE_STAGE) {
        return (
            <main className={styles.main}>

                <div className={styles.section}>
                    <h1 className={styles.title}>
                        Typing Challenge Has Ended
                    </h1>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <span className={styles.score}>    Points: {scores.points}</span>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.score}>Speed: {scores.speed} words/minute</span>
                    </div>


                    <h1 onClick={() => router.push('/')} className={styles.bigButton}>
                        Start Again
                    </h1>
                </div>
            </main >)
    }

    return null;
}

export default GameOver;
