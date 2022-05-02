import type { NextPage } from 'next'
import React from "react";
import Link from 'next/link'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {motion} from  'framer-motion'

const Home: NextPage = () => {
  return (
    <motion.div
    initial={{x:"0vw",y:'50vh', opacity:0}} 
    animate={{x:"0vw",y:"0vh", opacity:1}}
    exit={{x:"0vw",y:"0vh",opacity:0}}
    transition={{ type:"tween",stiffness:'120'}}
    >
    <main className="home">
        
      <header className="april-22-home-header">
				<div className="grid">
          <div className="x">
              <div className="c l8">
                  <p>Become a better person. Make the world a better place.</p>
                  <p>You don't have to keep choosing it.</p>
                  <div className="down"><a href="#get-started">Next</a></div>
              </div>
          </div>
				</div>
			</header>
			<div className="intro rellax" data-rellax-speed="12" id="get-started">
				<div className="grid">
					<div className="x">
						<div className="c l8">
              <p>Is it time we started working toward a goal we all want?</p>
							<p>It shouldn't be revolutionary. But it is.</p>
						</div>
					</div>
				</div>
			</div>
      <header className="high-impact viewport single-feature top-feature x">
          <div className="text c l6" data-aos="fade-up">
            <h1 className="headline">
              Our future is a product of the choices we make now
            </h1>
            <p data-aos="fade-up">
              You can either choose to make a better world, or you can accept
            the world that others are choosing for you. 
            </p>
            <p className="text-cta">
              <Link href="/about">Choose a better world</Link>
            </p>
          </div>
      </header>
      <section className="high-impact grid-full latest-features">
        <ul className="x article-list horizontal-list">
          <li data-aos="fade-up" className="c t6 d3">
            <article>
              <Link href="/climate-change">
                <img
                  src="./assets/img/climate-change/polar-bear-from-above-thumb.jpg"
                  alt="Polar bear on ice"
                />
                <span>
                  Sea Level Rise Map: Is Your Home in a Flood Zone?
                  <small>
                    See exactly which parts of the world are likely to be flooded by rising sea levels in the coming years.
                  </small>
                </span>
              </Link>
            </article>
          </li>
          <li data-aos="fade-up"  className="c t6 d3">
            <article>
              <Link href="/amazon-deforestation">
                <img
                  src="../assets/img/amazon/amazon-rainforest-deforestation-thumb.jpg"
                  alt="Amazon rainforest deforestation"
                />
                <span>
                  Amazonian Rainforest Deforestation Map
                  <small>
                    See how the rainforest will vanish in the coming years
                  </small>
                </span>
              </Link>
            </article>
          </li>
          <li data-aos="fade-up" className="c t6 d3">
            <article>
              <Link href="/california-wildfires">
                <img
                  src="./assets/img/climate-change/webp/helicopter-768.webp"
                  alt="Helictoper over wildfire"
                />
                <span>
                  California Wildfires Map
                  <small>
                    Watch wildfires spread across California in 60 seconds
                  </small>
                </span>
              </Link>
            </article>
          </li>
          <li data-aos="fade-up"  className="c t6 d3">
            <article>
              <Link href="/sustainable-businesses">
                <img
                  src="./assets/img/businesses/beer-thumb.jpg"
                  alt="Beer"
                />
                <span>
                  Sustainable Businesses
                  <small>
                    Switch to one of these businesses to help stop climate
                    change
                  </small>
                </span>
              </Link>
            </article>
          </li>
        </ul>
      </section>
      <div  data-aos="fade-up" className="high-impact viewport single-feature social-media x" id="understand">
        <div className="c l6 text">
          <h2 data-aos="fade-up" className="headline">
            You <em>can</em> change the world.
          </h2>
          <p data-aos="fade-up">
            Follow us on Twitter or Instagram to receive one daily
            suggestion on how you can change the world for the better.
          </p>
          <p data-aos="fade-up">
            Follow us on:{" "}
            <a href="https://twitter.com/ARevolutionary7">Twitter</a>,{" "}
            <a href="https://www.instagram.com/arevolutionaryact/">
              Instagram
            </a>{" "}
            and{" "}
            <a href="https://www.facebook.com/A-Revolutionary-Act-100177155707169">
              Facebook
            </a>
            .
          </p>
        </div>
      </div>
    </main></motion.div>
  )
}

export default Home
