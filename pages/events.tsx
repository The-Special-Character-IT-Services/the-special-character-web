import Header from '@components/Header';
import AllEvents from '@container/AllEvents';
import useRequest from 'hooks/useRequest';

interface Props {
  props: JSX.Element;
}

const events = (props: Props) => {
  const { data: eventData } = useRequest<string[]>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}event-page`,
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

export default events;
