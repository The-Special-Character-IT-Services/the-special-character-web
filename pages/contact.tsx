import FAQs from '@container/FAQs';
import ContactForm from '@container/ContactForm';
import useRequest from 'hooks/useRequest';
import { ContactPageType } from 'types';
import ContactQuery from '../queries/contactQuery';
import axiosInstance from 'lib/axiosInstance';
interface Props {}

const Contact = ({ contactData }) => {
  console.log('Contact data from contat.tsx', contactData);

  // const { data } = useRequest<ContactPageType>({
  //   url: 'contact-page',
  // });

  // console.log(data);

  return (
    <>
      {contactData && (
        <>
          <ContactForm data={contactData} />
          <FAQs data={contactData} />
        </>
      )}
    </>
  );
};

export async function getServerSideProps() {
  const res = await axiosInstance.post('graphql', {
    query: ContactQuery,
    variables: {},
  });
  return {
    props: {
      contactData: res.data.data,
    },
  };
}

export default Contact;
