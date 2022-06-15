/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import Member1 from 'assets/team/member-1.png';
import Member2 from 'assets/team/member-2.png';
// import Member3 from 'assets/team/member-3.png';
// import Member4 from 'assets/team/member-4.png';
// import Member5 from 'assets/team/member-5.png';
// import Member6 from 'assets/team/member-6.png';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Ethan Phamvan',
    title: 'Ethan Phamvan',
    designation: 'CEO and Founder',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/WhoozysWraps',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'instagram',
        path: 'https://www.instagram.com/whoozys_wraps/?hl=en',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Andrew Chum',
    title: 'Andrew Chum',
    designation: 'Installer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/proninjaperv',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'instagram',
        path: 'https://www.instagram.com/proninjaperv/',
        icon: <FaInstagram />,
      },
    ],
  },
  //for the third person
  // {
  //   id: 3,
  //   imgSrc: Member2,
  //   altText: 'Andrew Chum',
  //   title: 'Adrew Chum',
  //   designation: 'Installer',
  //   socialProfile: [
  //     {
  //       id: 1,
  //       name: 'facebook',
  //       path: 'https://www.facebook.com/proninjaperv',
  //       icon: <FaFacebookF />,
  //     },
  //     {
  //       id: 2,
  //       name: 'instagram',
  //       path: 'https://www.instagram.com/proninjaperv/',
  //       icon: <FaInstagram />,
  //     },
  //   ],
  // },
];

export default function TeamSection() {
  return (
    <section>
      <Container>
        <SectionHeader
          slogan ="Meet the team"
          title="Our talented individuals"
          />
          <Grid sx={styles.grid}>
            {data.map((item) => (
              <TeamCard
                key={item.id}
                src={item.imgSrc}
                altText={item.altText}
                title={item.title}
                designation={item.designation}
                social={item.socialProfile}

              />
            ))}
          </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      // 'repeat(3,1fr)', this is needed for 3 people
    ],
  },
};
