import Header from '@components/Header';
import AllEvents from '@container/AllEvents';
import EventQuery from '@queries/eventQuery';
import useRequest from 'hooks/useRequest';
import axiosInstance from 'lib/axiosInstance';
import { AllEventsType } from 'types';

interface Props {
  props: JSX.Element;
}

const Events = ({ eventData }) => {
  console.log('event data from events.tsx', eventData);

  // const { data: eventData } = useRequest<AllEventsType>({
  //   url: 'event-page',
  // });

  return (
    <>
      {eventData && (
        <>
          <Header
            label={eventData?.eventPage?.heading?.title}
            caption={eventData?.eventPage?.heading?.description}
            position={{
              circle1: ['top', 'left', '#fcdf69'],
              circle2: ['bottom', 'right', '#f99d77'],
            }}
          />
          <AllEvents data={eventData} />
        </>
      )}
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await axiosInstance.post('graphql', {
    query: EventQuery,
    variables: {},
  });
  return {
    props: {
      eventData: res.data.data,
    },
  };
}

export default Events;
