import React from 'react'
import './RandomFacts.css'
import FlipCard from './FlipCard'
import TrackVisibility from 'react-on-screen';
import CoffeeImg from '../../assets/img/coffee.jpg'
import CookImg from '../../assets/img/cook.jpg'
import CatImg from '../../assets/img/cat.jpg'
import MarvelImg from '../../assets/img/marvel.jpg'
import GamesImg from '../../assets/img/games.jpg'
import BooksImg from '../../assets/img/books.jpg'
import TeachImg from '../../assets/img/teach.jpg'
import PopcornImg from '../../assets/img/popcorn.jpg'
import EsportsImg from '../../assets/img/esports.jpg'

const ComponentToTrack = ({ isVisible }) => {
    return <div className="random-facts-content">
                <FlipCard img={CoffeeImg} delay={200} imgAlt="alt" text="I drink a lot of coffee" isVisible={isVisible} />
                <FlipCard img={CookImg} delay={300} imgAlt="alt" text="I love to cook (and eat)" isVisible={isVisible} />
                <FlipCard img={CatImg} delay={400} imgAlt="alt" text="I'm a cat person (and this is my cat)" isVisible={isVisible} />
                <FlipCard img={MarvelImg} delay={500} imgAlt="alt" text="I'm a Marvel fan" isVisible={isVisible} />
                <FlipCard img={GamesImg} delay={600} imgAlt="alt" text="I'm addicted to Games" isVisible={isVisible} />
                <FlipCard img={BooksImg} delay={700} imgAlt="alt" text="I like reading fiction books" isVisible={isVisible} />
                <FlipCard img={TeachImg} delay={800} imgAlt="alt" text="I like to teach people" isVisible={isVisible} />
                <FlipCard img={PopcornImg} delay={900} imgAlt="alt" text="Cinema + PopCorn = Life" isVisible={isVisible} />
                <FlipCard img={EsportsImg} delay={1000} imgAlt="alt" text="I'm a big fan of eSports" isVisible={isVisible} />
            </div>
}

export default props =>
        <div className="random-facts">
            <div className="random-facts-text">Random Facts</div>
                <TrackVisibility partialVisibility once>
                    <ComponentToTrack />
                </TrackVisibility>
        </div>