import IndividualEvent from '@container/IndividualEvent';
import UpcomingEvents from '@container/UpcomingEvents';

interface Props {
  props: JSX.Element;
}

const individualEvent = (props: Props) => {
  return (
    <>
      <IndividualEvent />
      <UpcomingEvents />
    </>
  );
};

export default individualEvent;
