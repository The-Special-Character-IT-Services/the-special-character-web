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

interface Props {}

const About = (props: Props) => {
  const { data: bannerData } = useRequest<string[]>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/about-banner`,
  });
  const { data: successData } = useRequest<string[]>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/about-success`,
  });
  const { data: missionData } = useRequest<string[]>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/about-mission`,
  });
  const { data: valuesData } = useRequest<string[]>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/about-values`,
  });
  const { data: teacherData } = useRequest<string[]>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/about-teacher`,
  });
  const { data: historyData } = useRequest<string[]>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/about-history`,
  });
  const { data: officeData } = useRequest<string[]>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/about-offices`,
  });
  return (
    <>
      {bannerData && <AboutBanner data={bannerData} />}
      {successData && <Success data={successData} />}
      {missionData && <AbtMission data={missionData} />}
      {valuesData && <Values data={valuesData} />}
      {teacherData && <AboutTeachers data={teacherData} />}
      {historyData && <TimelineSection data={historyData} />}
      {officeData && <Map data={officeData} />}
    </>
  );
};

export default About;
