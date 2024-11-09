import { memo } from 'react';
import classNames from 'classnames';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleFilter } from '@/store/features/events/eventsSlice';
import { selectIsActiveFilters } from '@/store/features/events/eventsSelector';
import type { Event } from '@/types';

import styles from './Event.module.scss';

interface EventProps {
    event: Event;
}

const Event = memo(({ event }: EventProps) => {
    const dispatch = useAppDispatch();
    const isActiveFilter = useAppSelector(selectIsActiveFilters(event.type));

    const toggleEvent = () => {
        dispatch(toggleFilter(event.type));
    };

    return (
        <li key={event.type}>
            <button
                type="button"
                className={classNames(styles.event, styles[event.type], {
                    [styles.active]: isActiveFilter,
                })}
                onClick={toggleEvent}
            >
                {event.name}
            </button>
        </li>
    );
});

export default Event;
