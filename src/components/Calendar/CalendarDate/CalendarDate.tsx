import classNames from 'classnames';

import CalendarEvents from '../CalendarEvents/CalendarEvents';

import type { CalendarDate } from '@/types';

import styles from './CalendarDate.module.scss';

interface CalendarDateProps {
    date: CalendarDate;
}

const CalendarDate = ({ date }: CalendarDateProps) => {
    return (
        <li className={styles.date}>
            <button
                type="button"
                disabled={date.status === 'past'}
                className={classNames(styles.dateButton, {
                    [styles.past]: date.status === 'past',
                })}
            >
                {date.date}
            </button>

            <CalendarEvents events={date.events} />
        </li>
    );
};

export default CalendarDate;
