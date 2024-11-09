import { days } from '@/mocks/events';

import styles from './CalendarDays.module.scss';

const CalendarDays = () => {
    return (
        <ul className={styles.days}>
            {days.map((day) => (
                <li key={day} className={styles.day}>
                    {day}
                </li>
            ))}
        </ul>
    );
};

export default CalendarDays;
