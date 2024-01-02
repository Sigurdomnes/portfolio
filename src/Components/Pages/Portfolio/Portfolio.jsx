import BasicCards from '../../Components/BasicCards/BasicCards';
import './Portfolio.css'
import basic from '../../../img/basichtmlcss.png'
import pfl from '../../../img/portfolio.png'
import github from '../../../img/github.jpg'
import db from '../../../img/dumbbells.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RoundedBorderButton from '../../Components/RoundedBorderButton/RoundedBorderButton';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCube, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { useState } from 'react';

function Portfolio() {
    const swiper = useSwiper();
    const [indeks, setIndeks] = useState(0);
    return (
        <div className='portfolio-wrapper'>
            <h1 className='portfolio-h1'>Portfolio</h1>
            <p className='portfolio-par'>Check out some of my projects that are available to view:</p>
            <div className='portfolio-content'>
                <BasicCards
                    className='portfolio-cards'
                    img={pfl}
                    imgAlt={''}
                    browser={true}
                    browserText={'sigurdomnes.com'}
                    hoverOverlay={true}
                    hoverOverlayTitle={'Portfolio'}
                    hoverOverlayText={"Take the red pill and dive into the matrix of this web-app!"}
                    cornerRibbon={true}
                    ribbonText='React.js'
                    ribbonIcon={<FontAwesomeIcon icon="fa-brands fa-react" />}
                    github={true}
                    githubText='Github'
                />
                <BasicCards
                    className='portfolio-cards'
                    img={basic}
                    browser={true}
                    browserText={'Responsive & Accessible'}
                    hoverOverlay={true}
                    hoverOverlayTitle={'Proof of concept'}
                    hoverOverlayText={"Clean mark-up, responsive and compliant with every WCAG 2.1 level AAA guideline."}
                    github={true}
                    githubText='Github'
                    deployed={true}
                    deployedText='Deployed'
                />
                <BasicCards
                    className='portfolio-cards'
                    img={db}
                    imgAlt={''}
                    device={true}
                    hoverOverlay={true}
                    hoverOverlayTitle={'Workout Diary App'}
                    hoverOverlayText={"Track your workout sets and weights intuitively and easy, just like an old-school notebook diary - with modern features."}
                    cornerRibbon={true}
                    ribbonText='Coming'
                    ribbonIcon={<FontAwesomeIcon icon="fa-solid fa-code" />}
                    ribbonColor='#444'
                    github={true}
                    githubText='Github'
                />
                <BasicCards
                    className='portfolio-cards'
                    img={github}
                    title={true}
                    titleText={'See more of my latest work on Github'}
                    link={'https://sigurdomnes.github.io/Basic-responsive-and-accessible-website/'}
                    github={true}
                    githubText='Github' />

                {/* Mobile */}
                <div className="portfolio-swiper-container">
                    <h2 className='portfolio-mobile-cards-header'>Projects:</h2>
                    <h1 className={`portfolio-mobile-cards-h1 ${indeks === 0 ? 'portfolio-activeslide' : 'portfolio-slide'}`}>Portfolio website</h1>
                    <h1 className={`portfolio-mobile-cards-h1 ${indeks === 1 ? 'portfolio-activeslide' : 'portfolio-slide'}`}>Proof of concept</h1>
                    <h1 className={`portfolio-mobile-cards-h1 ${indeks === 2 ? 'portfolio-activeslide' : 'portfolio-slide'}`}>Workout diary app</h1>
                    <h1 className={`portfolio-mobile-cards-h1 ${indeks === 3 ? 'portfolio-activeslide' : 'portfolio-slide'}`}>Behind the scenes</h1>
                    <Swiper
                        effect={'cube'}
                        grabCursor={false}
                        pagination={true}
                        direction={'vertical'}
                        allowTouchMove={true}
                        modules={[EffectCube, Pagination]}
                        shadow={false}
                        slideShadows={false}
                        onSlideChange={
                            (e) => { setIndeks(e.realIndex) }
                        }
                        shadowScale={0}
                        className="portfolio-swiper"
                        style={{
                            '--swiper-pagination-color': '#e4ab00',
                            '--swiper-pagination-bullet-inactive-opacity': '0.5',
                            '--swiper-pagination-bullet-size': '8px',
                            '--swiper-pagination-bullet-vertical-gap': '5px',
                        }}
                    >
                        <SwiperSlide>
                        <div className='portfolio-scroll-arrow'><span></span></div>
                            <BasicCards
                                img={pfl}
                                imgAlt={''}
                                imgLoading={'eager'}
                                browser={true}
                                browserHeight='3rem'
                                browserText={'sigurdomnes.com'}
                                hoverOverlay={false}
                                height='18rem'
                                width='92vw'
                                cornerRibbon={true}
                                ribbonText='React.js'
                                ribbonIcon={<FontAwesomeIcon icon="fa-brands fa-react" />}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BasicCards
                                img={basic}
                                imgLoading={'eager'}
                                browser={true}
                                browserHeight='3rem'
                                browserText={'Responsive & Accessible'}
                                hoverOverlay={false}
                                height='18rem'
                                width='92vw'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BasicCards
                                img={db}
                                imgAlt={''}
                                device={true}
                                height='18rem'
                                width='92vw'
                                cornerRibbon={true}
                                ribbonText='Coming'
                                ribbonIcon={<FontAwesomeIcon icon="fa-solid fa-code" />}
                                ribbonColor='#555'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BasicCards
                                img={github}
                                imgLoading={'eager'}
                                title={true}
                                titleText={'See more of my latest work on Github'}
                                height='18rem'
                                width='92vw'
                            />

                        </SwiperSlide>
                    </Swiper>
                    <div className={`portfolio-mobile-cards-descr-container ${indeks === 0 ? 'portfolio-activeslide' : 'portfolio-slide'}`}>
                        <div className='portfolio-mobile-cards-par'>
                        Take the red pill and dive into the matrix of this web-app!
                        </div>

                        <a href=""><button className="pf-m-c-d-btn"><FontAwesomeIcon icon="fa-brands fa-github" className="pf-m-c-d-ico" />Github</button></a>
                    </div>
                    <div className={`portfolio-mobile-cards-descr-container ${indeks === 1 ? 'portfolio-activeslide' : 'portfolio-slide'}`}>
                        <div className='portfolio-mobile-cards-par'>
                        Clean mark-up, responsive and compliant with every WCAG 2.1 level AAA guideline. as required by Norwegian law.
                        </div>
                        <a href="https://sigurdomnes.github.io/Basic-responsive-and-accessible-website/"><button className="pf-m-c-d-btn"><FontAwesomeIcon icon="fa-solid fa-globe" className="pf-m-c-d-ico"/>Deployed</button></a>
                        <a href="https://github.com/Sigurdomnes/Basic-responsive-and-accessible-website"><button className="pf-m-c-d-btn"><FontAwesomeIcon icon="fa-brands fa-github" className="pf-m-c-d-ico" />Github</button></a>
                    </div>
                    <div className={`portfolio-mobile-cards-descr-container ${indeks === 2 ? 'portfolio-activeslide' : 'portfolio-slide'}`}>
                        <div className='portfolio-mobile-cards-par'>
                            Track your workout sets and weights intuitively and easy, just like an old-school notebook diary - with modern features.
                        </div>
                        <a href=""><button className="pf-m-c-d-btn"><FontAwesomeIcon icon="fa-brands fa-github" className="pf-m-c-d-ico" />Github</button></a>
                    </div>
                    <div className={`portfolio-mobile-cards-descr-container ${indeks === 3 ? 'portfolio-activeslide' : 'portfolio-slide'}`}>
                        <div className='portfolio-mobile-cards-par'>
                            Check if there is a new project in the works!
                        </div>
                        <a href=""><button className="pf-m-c-d-btn"><FontAwesomeIcon icon="fa-brands fa-github" className="pf-m-c-d-ico" />Let's go</button></a>
                    </div>
                </div>
            </div>
            <RoundedBorderButton
                className='portfolio-contact-btn'
                color='var(--light-background)'
                bgColor='#191b22'
                hoverFill='var(--accentcolor)'
                hoverColor='var(--themecolor)'
                text={'About'}
                arrow={true}
                width='15rem'
                height='3.5rem'
                onClick={() => { swiper.slideTo(2); }} />
        </div >
    );
}

export default Portfolio;