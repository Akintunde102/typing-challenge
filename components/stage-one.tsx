import React from 'react';
import type { NextPage } from 'next'
import styles from '../styles/gen.module.css'
import { texts } from '../resources/text'
import Text from "../components/text";
import { Stage } from '../types';
import { showStage } from '../utils';

const PAGE_STAGE: Stage = 1;

interface StageOneProps {
    presentStage: Stage;
    setText: (text: string) => void;
    setStage: (stage: Stage) => void;
}

const StageOne: NextPage<StageOneProps> = ({ presentStage, setText, setStage }: StageOneProps) => {

    const handleTextPick = (t: string) => {
        setText(t);
        setStage(PAGE_STAGE);
    }

    if (showStage(presentStage, PAGE_STAGE)) {
        return (
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Pick Text
                </h1>

                <code className={styles.code}>Pick the Text You want Below</code>
                {texts.map((text, index) => <Text text={text} key={index} handleTextPick={handleTextPick} />)
                }
            </main >)
    }

    return null;
}

export default StageOne;
