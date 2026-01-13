import styles from './ContactList.module.css';
import Contact from "../Contact/Contact";

import { useSelector } from "react-redux";

export default function ContactList() {
    const contacts = useSelector((state) => state.contacts.items);
    const filter = useSelector((state) => state.filter.name);

    return (
        <ul className={styles.container}>
            {contacts
                ?.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
                .map((contact) => (
                    <li key={contact.id}>
                        <Contact {...contact} />
                    </li>
                ))}
        </ul>
    );
}
