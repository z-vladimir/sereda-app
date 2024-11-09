import { useRef } from 'react';
import classNames from 'classnames';
import { Tooltip, TooltipRefProps } from 'react-tooltip';

import CalendarEvents from '../CalendarEvents/CalendarEvents';
import CalendarTooltip from '../CalendarTooltip/CalendarTooltip';

import type { CalendarDate } from '@/types';

import styles from './CalendarDate.module.scss';

interface CalendarDateProps {
    date: CalendarDate;
    index: string;
}

const CalendarDate = ({ date, index }: CalendarDateProps) => {
    const tooltipRef = useRef<TooltipRefProps>(null);

    const closeTooltip = () => {
        if (tooltipRef.current?.isOpen) {
            tooltipRef.current?.close();
        }
    };

    return (
        <li className={styles.date}>
            <button
                id={index}
                type="button"
                disabled={date.status === 'past'}
                className={classNames(styles.dateButton, {
                    [styles.past]: date.status === 'past',
                })}
                onClick={date.status === 'active' ? closeTooltip : undefined}
            >
                {date.date}
            </button>

            <CalendarEvents events={date.events} />

            {date.events.length > 0 && (
                <Tooltip
                    anchorSelect={`#${index}`}
                    ref={tooltipRef}
                    place="bottom-start"
                    offset={-3}
                    clickable={true}
                    openOnClick={true}
                    closeEvents={{ click: true }}
                    noArrow={true}
                    opacity={1}
                    className={styles.tooltip}
                >
                    <CalendarTooltip events={date.events} />
                </Tooltip>
            )}
        </li>
    );
};

export default CalendarDate;
