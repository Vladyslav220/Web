import React from 'react'
import { Container } from '../Container/Container'
import { HeroContainer, HeroBG } from './Hero.styledd'


const Hero = () => {
    return (
        <HeroBG>
            <Container>
                <HeroContainer>
                    <h1>Find your bike</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </HeroContainer>
            </Container>
        </HeroBG>
    )
}

export default Hero;