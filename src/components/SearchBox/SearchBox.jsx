import styles from './SearchBox.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter.name);

    return (
        <div className={styles.container}>
            <label htmlFor="search">
                Find contacts by name
                <input id="search" value={filter} onChange={(e) => dispatch(changeFilter(e.target.value))} />
            </label>
        </div>
    );
}
