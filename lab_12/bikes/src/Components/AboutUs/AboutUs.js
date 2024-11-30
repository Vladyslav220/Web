import React from 'react';
// import AbtCar from '../../img/abtus_car.png'
import { Container } from '../Container/Container';
import { 
  Section, 
  AbtWrapper,
  AboutText,
  Title,
  Paragraph,
  // Stats, 
  // StatItem,
  // StatNumber,
  AboutImage,
  Image
} from './AboutUs.styled';


const AboutUs = () => {
  return (
    <Section>
        <Container>
            <AbtWrapper>
                <AboutText>
                        <Title>About Us</Title>
                        <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel aliquet tortor ut sit sit.
                        Velit imperdiet integer elementum a scelerisque pulvinar venenatis sodales. Quis nulla euismod feugiat at interdum in.
                        Venentatis arcu semper lectus quis sit in rhoncus auctor.
                        </Paragraph>
                    </AboutText>
                    <AboutImage>
                        <Image src='https://png.pngtree.com/thumb_back/fw800/background/20230524/pngtree-the-blue-motorcycle-is-blue-on-the-black-background-image_2608546.jpg' alt="Car" />
                    </AboutImage>
            </AbtWrapper>
        </Container>
    </Section>
  );
};

export default AboutUs;
