import styles from "./ProgressBar.module.css"

function ProgressBar({ percentage }) {
    const percentageProgress = `progress${percentage}`
    return (
        <div className={styles.container}>
            <div className={styles.progress + ' ' + styles[percentageProgress]}></div>
        </div>
    )
}

export default ProgressBar
