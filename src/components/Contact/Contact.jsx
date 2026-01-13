import { FaUser, FaPhone, FaTrashCan } from "react-icons/fa6";
import styles from "./Contact.module.css";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ id, name, number }) {
    const dispatch = useDispatch();
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
            <button
                className={styles.button}
                onClick={() => dispatch(deleteContact(id))}
                title="Delete contact">
                <FaTrashCan />
            </button>
        </div>
    );
}
