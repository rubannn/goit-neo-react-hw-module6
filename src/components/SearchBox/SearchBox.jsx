import styles from './SearchBox.module.css';

export default function SearchBox({ value, onChange }) {
    return (
        <div className={styles.container}>
            <label htmlFor="search">
                Find contacts by name
                <input id="search" value={value} onChange={(e) => onChange(e.target.value)} />
            </label>
        </div>
    );
}
