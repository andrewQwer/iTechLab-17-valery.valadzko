const initialState = {
    tickets: [
        {
            id: 1,
            name: 'To France',
        },
        {
            id: 2,
            name: 'To Japan',
        },
        {
            id: 3,
            name: 'To China',
        },
        {
            id: 4,
            name: 'To Russia',
        },
        {
            id: 5,
            name: 'To USA',
        },
        {
            id: 6,
            name: 'To England',
        }
    ]
}

export default function tickets(state = initialState) {
    return state;
}