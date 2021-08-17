import Header from '@components/Header';
import AllEvents from '@container/AllEvents';

interface Props {
  props: JSX.Element;
}

const events = (props: Props) => {
  return (
    <>
      <Header
        bgColor1="#fcdf69"
        bgColor2="#f99d77"
        label="Events"
        caption="Presenting Academy, the tech school of the future. We teach you the right skills to be prepared for tomorrow."
        position={{
          circle1: ['top', 'left'],
          circle2: ['bottom', 'right'],
        }}
      />
      <AllEvents />
    </>
  );
};

export default events;
