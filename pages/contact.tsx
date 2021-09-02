import FAQs from '@container/FAQs';
import ContactForm from '@container/ContactForm';
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
          <ContactForm data={data} />
          <FAQs data={data} />
        </>
      )}
    </>
  );
};

export default Contact;
