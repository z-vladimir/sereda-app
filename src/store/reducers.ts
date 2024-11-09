import { combineReducers } from '@reduxjs/toolkit';
import { eventsReducer } from '@/store/features/events/eventsSlice';

export const rootReducer = combineReducers({
    events: eventsReducer,
});
