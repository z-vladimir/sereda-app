import classNames from 'classnames';

import type { Event } from '@/types';

import styles from './CalendarEvent.module.scss';

interface CalendarEventProps {
    type: Event['type'];
}

const CalendarEvent = ({ type }: CalendarEventProps) => {
    return (
        <li>
            <span className={classNames(styles.event, styles[type])} />
        </li>
    );
};

export default CalendarEvent;
