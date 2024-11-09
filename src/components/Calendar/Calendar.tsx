import { useAppSelector } from '@/store/hooks';
import { selectFilteredEvents } from '@/store/features/events/eventsSelector';

import CalendarMonth from './CalendarMonth/CalendarMonth';

import styles from './Calendar.module.scss';

const Calendar = () => {
    const events = useAppSelector(selectFilteredEvents);

    return (
        <ul className={styles.calendar}>
            {events?.map((month, index) => (
                <CalendarMonth key={month.name} month={month} index={index} />
            ))}
        </ul>
    );
};

export default Calendar;
