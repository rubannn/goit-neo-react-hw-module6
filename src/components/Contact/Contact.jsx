import { FaUser, FaPhone } from "react-icons/fa6";

import styles from "./Contact.module.css";

export default function Contact({ id, name, number, onDelete }) {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <p className={styles.record}>
                    <FaUser />
                    {name}
                </p>
                <p className={styles.record}>
                    <FaPhone />
                    {number}
                </p>
            </div>
            <button className={styles.button} onClick={() => onDelete(id)}>
                Delete
            </button>
        </div>
    );
}
