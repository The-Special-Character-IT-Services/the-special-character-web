import Divider from '@components/Divider';
import SubscriptionEmail from '@components/SubscriptionEmail';
import Typography from '@components/Typography';
import React from 'react';

interface Props {}

const mitanshu = (props: Props) => {
  return (
    <>
      <div className="demo">
        <SubscriptionEmail></SubscriptionEmail>
        <Typography variant="h1" className="commonHeading demo">
          Hello
        </Typography>
      </div>
      <style jsx>
        {`
          .demo h1 {
            font-family: 'Courier New', Courier, monospace;
            padding: 1rem;
          }
        `}
      </style>
    </>
  );
};

export default mitanshu;
