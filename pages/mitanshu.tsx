import Timeline from '@components/Timeline';
import Typography from '@components/Typography';

interface Props {}

const Mitanshu = (props: Props) => {
  const array = [
    {
      year: '2021',
      title: 'Launched course #500',
      description:
        'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor.',
    },
    {
      year: '2023',
      title: 'Reached 100 team members',
      description:
        'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor.',
    },
    {
      year: '2025',
      title: 'Reached 100 team members',
      description:
        'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor.',
    },
    {
      year: '2025',
      title: 'Reached 100 team members',
      description:
        'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor.',
    },
  ];
  return (
    <>
      <Typography variant="h1">Hello</Typography>
      <Timeline data={array}></Timeline>
    </>
  );
};

export default Mitanshu;
