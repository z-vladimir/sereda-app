import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { calendarEvents } from '@/mocks/events';
import { CalendarMonth, EventType } from '@/types';

interface CalendarState {
    events: CalendarMonth[];
    filters: EventType[];
}

const initialState: CalendarState = {
    events: calendarEvents,
    filters: [],
};

const eventsSlice = createSlice({
    name: '@@events',
    initialState,
    reducers: {
        addFilter: (state, action: PayloadAction<EventType>) => {
            state.filters.push(action.payload);
        },
        removeFilter: (state, action: PayloadAction<EventType>) => {
            state.filters = state.filters.filter(
                (filter) => filter !== action.payload,
            );
        },
        toggleFilter: (state, action: PayloadAction<EventType>) => {
            if (state.filters.includes(action.payload)) {
                state.filters = state.filters.filter(
                    (filter) => filter !== action.payload,
                );
            } else {
                state.filters.push(action.payload);
            }
        },
        clearFilters: (state) => {
            state.filters = [];
        },
    },
});

export const { addFilter, removeFilter, toggleFilter, clearFilters } =
    eventsSlice.actions;

export const eventsReducer = eventsSlice.reducer;
