import { RootState } from '@/store/store';
import { EventType } from '@/types';
import { createSelector } from '@reduxjs/toolkit';

export const selectEvents = (state: RootState) => state.events.events;

export const selectActiveFilters = (state: RootState) => state.events.filters;

export const selectIsActiveFilters = (event: EventType) =>
    createSelector(selectActiveFilters, (filters) => filters.includes(event));

export const selectFilteredEvents = createSelector(
    selectEvents,
    selectActiveFilters,
    (events, filters) => {
        if (filters.length === 0) {
            return events;
        }

        return events.map((month) => {
            return {
                ...month,
                dates: month.dates.map((date) => {
                    return {
                        ...date,
                        events: date.events.filter((event) =>
                            filters.includes(event.type.type),
                        ),
                    };
                }),
            };
        });
    },
);
