import IndividualEvent from '@container/IndividualEvent';
import UpcomingEvents from '@container/UpcomingEvents';
import useRequest from 'hooks/useRequest';
import { useRouter } from 'next/router';
import { IndividualEventTypes } from 'types';

interface Props {}

const IndividualEventPage = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const { data: individualEventData } = useRequest<IndividualEventTypes>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/events/${id}`,
  });
  return (
    <>
      {individualEventData && <IndividualEvent data={individualEventData} />}
      <UpcomingEvents />
    </>
  );
};

export default IndividualEventPage;
