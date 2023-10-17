import useEventsResults from '../state/events-results';

//hook para hacer una llamada a la api y guardarlo en tu estado local

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