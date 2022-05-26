import IndividualEvent from '@container/IndividualEvent';
import UpcomingEvents from '@container/UpcomingEvents';
import useRequest from 'hooks/useRequest';
import { useRouter } from 'next/router';
import { IndividualEventTypes, UpcomingEventType } from 'types';

interface Props {}

const IndividualEventPage = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const { data: individualEventData } = useRequest<IndividualEventTypes>({
    url: `events/${id}`,
  });
  const { data: upcomingEventData } = useRequest<UpcomingEventType>({
    url: `upcoming-events`,
  });
  return (
    <>
      {individualEventData && <IndividualEvent data={individualEventData} />}
      {upcomingEventData && <UpcomingEvents data={upcomingEventData} />}
    </>
  );
};

export default IndividualEventPage;
