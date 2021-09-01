import Header from '@components/Header';
import AllEvents from '@container/AllEvents';
import useRequest from 'hooks/useRequest';
import { AllEventsType } from 'types';

interface Props {
  props: JSX.Element;
}

const Events = (props: Props) => {
  const { data: eventData } = useRequest<AllEventsType>({
    url: 'event-page',
  });

  return (
    <>
      {eventData && (
        <>
          <Header
            label={eventData.heading.title}
            caption={eventData.heading.description}
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

export default Events;
