import Events from '@/components/Events/Events';
import Calendar from '@/components/Calendar/Calendar';

import styles from './CalendarPage.module.scss';

const CalendarPage = () => {
    return (
        <section>
            <h1 className={styles.title}>Calendar</h1>

            <div className={styles.events}>
                <Events />
            </div>

            <div className={styles.calendar}>
                <Calendar />
            </div>
        </section>
    );
};

export default CalendarPage;
