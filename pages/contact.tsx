import FAQs from '@container/FAQs';
import Form from '@container/Form';
import useRequest from 'hooks/useRequest';
import { ContactPageType } from 'types';

interface Props {}

const Contact = (props: Props) => {
  const { data } = useRequest<ContactPageType>({
    url: 'contact-page',
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
