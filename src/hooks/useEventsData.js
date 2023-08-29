import useEventsResults from '../state/events-results';
{/*app.use(cors({
    origin: 'http://localhost:5173'
}));*/}

const useEventsData = () => {
    const {data,isLoading,error,fetchEvents} = useEventsResults();

    return {
        events: data?._embedded?.events || [],
        page: data?.page || {},
        isLoading,
        error,
        fetchEvents,

        //events: const { _embedded: { events }} = data.current._embedded.events,
        //events
    };
};

export default useEventsData;