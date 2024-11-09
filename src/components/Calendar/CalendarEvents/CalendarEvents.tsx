import CalendarEvent from '../CalendarEvent/CalendarEvent';

import type { CalendarEvent as CalendarEventType } from '@/types';

import styles from './CalendarEvents.module.scss';

interface CalendarEventsProps {
    events: CalendarEventType[];
}

const CalendarEvents = ({ events }: CalendarEventsProps) => {
    return (
        <ul className={styles.events}>
            {events.map(({ type }) => (
                <CalendarEvent key={type.name} type={type.type} />
            ))}
        </ul>
    );
};

export default CalendarEvents;
