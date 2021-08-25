import IndividualEvent from '@container/IndividualEvent';
import UpcomingEvents from '@container/UpcomingEvents';
import useRequest from 'hooks/useRequest';
import { IndividualEventTypes } from 'types';

interface Props {}

const IndividualEventPage = (props: Props) => {
  const { data: individualEventData } = useRequest<IndividualEventTypes>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/events/1`,
  });
  return (
    <>
      {individualEventData && <IndividualEvent data={individualEventData} />}
      <UpcomingEvents />
    </>
  );
};

export default IndividualEventPage;
