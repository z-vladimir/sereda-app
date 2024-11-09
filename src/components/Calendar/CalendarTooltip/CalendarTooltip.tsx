import { CalendarEvent } from '@/types';

import CalendarTooltipItem from '../CalendarTooltipItem/CalendarTooltipItem';

import styles from './CalendarTooltip.module.scss';

interface CalendarTooltipProps {
    events: CalendarEvent[];
}

const CalendarTooltip = ({ events }: CalendarTooltipProps) => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Events</h3>

            <hr className={styles.separator} />

            {events.map((event, index) => (
                <>
                    <CalendarTooltipItem key={index} event={event} />
                    <hr className={styles.separator} />
                </>
            ))}

            <div className={styles.buttonWrapper}>
                <button type="button" className={styles.button}>
                    Add event
                </button>
            </div>
        </div>
    );
};

export default CalendarTooltip;
