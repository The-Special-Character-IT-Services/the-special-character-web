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

interface Props {}

const About = (props: Props) => {
  const { data: bannerData } = useRequest<AboutBannerType>({
    url: 'about-banner',
  });
  const { data: successData } = useRequest<AboutSuccessType>({
    url: 'about-success',
  });
  const { data: missionData } = useRequest<AboutMissionType>({
    url: 'about-mission',
  });
  const { data: valuesData } = useRequest<AboutValuesType>({
    url: 'about-values',
  });
  const { data: teacherData } = useRequest<AboutTeacherType>({
    url: 'about-teacher',
  });
  const { data: historyData } = useRequest<AboutHistoryType>({
    url: 'about-history',
  });
  const { data: officeData } = useRequest<AboutOfficesType>({
    url: 'about-offices',
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
