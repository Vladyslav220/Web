import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Container } from '../Container/Container';
import { 
  SFooter,
  FooterContainer,
  LogoWrapper,
  FooterColumn,
  SocialMedia,
  SocialIcon,
  FooterBottom,
  FooterBottomText
} from './Footer.styled';


const Footer = () => {
  return (
    <SFooter>
        <Container>
            <FooterContainer>
                
                <FooterColumn>
                    <h3>About Us</h3>
                    <a href="#about">About Us</a>
                    <a href="#faq">FAQ</a>
                    <a href="#contact">Contact</a>
                </FooterColumn>
                <FooterColumn>
                    <h3>Customer Service</h3>
                    <p>Email: info@bike.com</p>
                    <p>Phone: 240-865-3730</p>
                </FooterColumn>
                <FooterColumn>
                    <h3>Location</h3>
                    <p>3726 Calvin Street</p>
                    <p>Baltimore, Maryland, 21201</p>
                    <p>United States</p>
                    <SocialMedia>
                        <SocialIcon href="https://www.facebook.com" target="_blank">
                        <FaFacebook />
                        </SocialIcon>
                        <SocialIcon href="https://www.instagram.com" target="_blank">
                        <FaInstagram />
                        </SocialIcon>
                        <SocialIcon href="https://www.youtube.com" target="_blank">
                        <FaYoutube />
                        </SocialIcon>
                    </SocialMedia>
                </FooterColumn>
            </FooterContainer>
            <FooterBottom>
                <FooterBottomText>2024 Autohunt. All Rights Reserved.</FooterBottomText>
            </FooterBottom>
        </Container>
    </SFooter>
    
  );
};

export default Footer;
