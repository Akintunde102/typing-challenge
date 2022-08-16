import type { NextPage } from 'next'
import styles from '../styles/gen.module.css'

const Text: NextPage<{ text: string, handleTextPick: (text: string) => void }> = ({ text, handleTextPick }) => {

    return (
        <div className={styles.tContainer}>
            <button onClick={() => handleTextPick(text)}>Choose Text</button>
            {text}
        </div >
    )
}

export default Text;
