import IndividualEvent from '@container/IndividualEvent';
import UpcomingEvents from '@container/UpcomingEvents';
import useRequest from 'hooks/useRequest';

interface Props {
  props: JSX.Element;
}

const IndividualEventPage = (props: Props) => {
  const id =
    typeof window !== 'undefined' ? window.location.pathname.slice(1) : '';
  const { data: individualEventData } = useRequest<string[]>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/${id}`,
  });
  return (
    <>
      {individualEventData && <IndividualEvent data={individualEventData} />}
      <UpcomingEvents />
    </>
  );
};

export default IndividualEventPage;
