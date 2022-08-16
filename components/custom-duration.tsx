import React from 'react';
import type { NextPage } from 'next'
import styles from '../styles/gen.module.css'
import { Duration } from '../types';

interface CustomDurationProps {
    handleDurationPick: (d: Duration) => void;
    showCustomDuration: boolean;
}

const CustomDuration: NextPage<CustomDurationProps> = ({ showCustomDuration, handleDurationPick }: CustomDurationProps) => {

    const [customDuration, setCustomDuration] = React.useState<Duration>(1);


    const handleCustomDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value) || 0;
        setCustomDuration(value);
    }

    if (showCustomDuration) {
        return <div className={styles.customDuration}>
            <div className={styles.smallForm}>
                <div>Fill In Custom (in mins)</div>
                <div className={styles.bigInput}>
                    <div><input size={5} autoFocus value={customDuration} onChange={handleCustomDurationChange} />
                    </div>
                    <button onClick={() => handleDurationPick(customDuration)}>Set</button>
                </div>
            </div>
        </div>
    }


    return null;

}

export default CustomDuration;
