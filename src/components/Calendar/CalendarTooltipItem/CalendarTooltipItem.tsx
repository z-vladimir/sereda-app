import { memo } from 'react';
import classNames from 'classnames';

import EditIcon from '@/assets/icons/edit.svg';
import { CalendarEvent } from '@/types';

import styles from './CalendarTooltipItem.module.scss';

interface CalendarTooltipItemProps {
    event: CalendarEvent;
}

const CalendarTooltipItem = memo(
    ({ event }: CalendarTooltipItemProps) => {
        return (
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h4 className={styles.title}>{event.title}</h4>

                    <button type="button">
                        <EditIcon />
                    </button>
                </div>
                <p className={styles.description}>{event.description}</p>
                <address className={styles.place}>{event.place}</address>

                <div className={styles.info}>
                    <time
                        className={classNames(
                            styles.date,
                            styles[event.type.type],
                        )}
                    >
                        {event.date}
                    </time>
                    <span
                        className={classNames(
                            styles.type,
                            styles[event.type.type],
                        )}
                    >
                        {event.type.name}
                    </span>
                </div>
            </div>
        );
    },
    (prevProps, nextProps) => {
        return prevProps.event.title === nextProps.event.title;
    },
);

export default CalendarTooltipItem;
