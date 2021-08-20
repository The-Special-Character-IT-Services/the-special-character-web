import IndividualEvent from '@container/IndividualEvent';
import UpcomingEvents from '@container/UpcomingEvents';
import useRequest from 'hooks/useRequest';

interface Props {
  props: JSX.Element;
}

const individualEvent = (props: Props) => {
  const { data: individualEventData } = useRequest<string[]>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}events/1`,
  });
  return (
    <>
      {individualEventData && <IndividualEvent data={individualEventData} />}
      <UpcomingEvents />
    </>
  );
};

export default individualEvent;
