import FAQs from '@container/FAQs';
import Form from '@container/Form';
import useRequest from 'hooks/useRequest';

interface Props {}

const Contact = (props: Props) => {
  const { data } = useRequest<string[]>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/contact-page`,
  });
  return (
    <>
      {data && (
        <>
          <Form data={data} />
          <FAQs data={data} />
        </>
      )}
    </>
  );
};

export default Contact;
