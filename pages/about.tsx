import AboutBanner from '@container/AboutBanner';
import AboutEducation from '@container/AboutEducation';
import AboutTeachers from '@container/AboutTeachers';
import AbtMission from '@container/AbtMission';
import Map from '@container/Map';
import Ratings from '@container/Ratings';
import Success from '@container/Success';
import TimelineSection from '@container/TimelineSection';
import Values from '@container/Values';
import useRequest from 'hooks/useRequest';
import {
  AboutBannerType,
  AboutHistoryType,
  AboutMissionType,
  AboutOfficesType,
  AboutSuccessType,
  AboutTeacherType,
  AboutValuesType,
} from 'types';
import AboutQuery from '@queries/aboutQuery';
import axiosInstance from 'lib/axiosInstance';
interface Props {}

const About = ({ data }) => {
  console.log('data', data);
  return (
    <>
      {data.aboutBanner && <AboutBanner data={data.aboutBanner} />}
      {data.aboutSuccess && <Success data={data.aboutSuccess} />}
      {data.aboutMission && <AbtMission data={data.aboutMission} />}
      {data.aboutValue && <Values data={data.aboutValue} />}
      {data.aboutTeacher && <AboutTeachers data={data.aboutTeacher} />}
      {data.aboutHistory && <TimelineSection data={data.aboutHistory} />}
      {data.aboutOffice && <Map data={data.aboutOffice} />}
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await axiosInstance.post('graphql', {
    query: AboutQuery,
    variables: {},
  });
  return {
    props: {
      data: res.data.data,
    },
  };
}

export default About;
