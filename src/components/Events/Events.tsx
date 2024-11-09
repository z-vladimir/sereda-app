import Event from '@/components/Event/Event';
import { events } from '@/mocks/events';

import styles from './Events.module.scss';

const Events = () => {
    return (
        <ul className={styles.events}>
            {events.map((event) => (
                <Event key={event.type} event={event} />
            ))}
        </ul>
    );
};

export default Events;
