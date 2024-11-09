import classNames from 'classnames';

import CalendarDays from '../CalendarDays/CalendarDays';
import CalendarDate from '../CalendarDate/CalendarDate';

import type { CalendarMonth } from '@/types';

import styles from './CalendarMonth.module.scss';

interface CalendarMonthProps {
    month: CalendarMonth;
    index: number;
}

const CalendarMonth = ({ month, index }: CalendarMonthProps) => {
    return (
        <li key={month.name} className={styles.month}>
            <div
                className={classNames(styles.monthContent, {
                    [styles.first]: index === 0 || (index + 1) % 4 === 0,
                    [styles.last]: (index + 1) % 3 === 0,
                })}
            >
                <h2 className={styles.monthName}>{month.name}</h2>

                <CalendarDays />

                <ul className={styles.dates}>
                    {month.dates.map((date, index) => (
                        <CalendarDate
                            key={`${month.name}-${date.date}-${index}`}
                            index={`${month.name}-${date.date}-${index}`}
                            date={date}
                        />
                    ))}
                </ul>
            </div>
        </li>
    );
};

export default CalendarMonth;
