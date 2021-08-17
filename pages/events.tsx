import Header from '@components/Header';
import AllEvents from '@container/AllEvents';

interface Props {
  props: JSX.Element;
}

const events = (props: Props) => {
  return (
    <>
      <Header
        label="Events"
        caption="Presenting Academy, the tech school of the future. We teach you the right skills to be prepared for tomorrow."
        position={{
          circle1: ['top', 'left', '#fcdf69'],
          circle2: ['bottom', 'right', '#f99d77'],
        }}
      />
      <AllEvents />
    </>
  );
};

export default events;
