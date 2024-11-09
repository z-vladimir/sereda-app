export type Route = {
    path: string;
    name: string;
};

export type EventType = 'meeting' | 'conference' | 'question' | 'webinar';
export type Month =
    | 'July'
    | 'August'
    | 'September'
    | 'October'
    | 'November'
    | 'December';

export type Event = {
    type: EventType;
    name: string;
};

export type CalendarEvent = {
    type: Event;
    title: string;
    description: string;
    place: string;
    date: string;
};

export type CalendarDate = {
    date: string;
    events: CalendarEvent[];
    status: 'past' | 'active';
};

export type CalendarMonth = {
    name: Month;
    dates: CalendarDate[];
};
