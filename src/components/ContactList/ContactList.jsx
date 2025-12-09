import styles from './ContactList.module.css';
import Contact from "../Contact/Contact";

export default function ContactList({ contacts, onDelete }) {
    return (
        <ul className={styles.container}>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <Contact {...contact} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    );
}
