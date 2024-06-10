import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    Row,
    Col,
} from 'reactstrap';

const items = [
    {
        id: 1,
        altText: 'Slide 1',
        caption: 'Slide 1',
    },
    {
        id: 2,
        altText: 'Slide 2',
        caption: 'Slide 2',
    },
    {
        id: 3,
        altText: 'Slide 3',
        caption: 'Slide 3',
    },
];

function Testimonials(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                tag="div"
                key={1}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}

            >

                <Row className='justify-content-center'>

                    <Col className="mb-5 mb-lg-2" lg="3" md="6" sm="6" xs="5">
                        <div className="px-4">
                            <img
                                alt="..."
                                className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                src={require("assets/img/theme/team-2-800x800.jpg")}
                                style={{ width: "200px" }}
                            />
                            <div className="pt-4 text-center">
                                <h5 className="title">
                                    <span className="text-black-50 mb-1">Heru & Helma</span>
                                    <p style={{ fontSize: "0.8rem" }} className="text-black-50">
                                        "Sekawan stories kereennnn"
                                    </p>
                                </h5>

                            </div>
                        </div>
                    </Col>
                    <Col className="mb-5 mb-lg-2" lg="3" md="6" sm="6" xs="5">
                        <div className="px-4">
                            <img
                                alt="..."
                                className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                src={require("assets/img/theme/team-3-800x800.jpg")}
                                style={{ width: "200px" }}
                            />
                            <div className="pt-4 text-center">
                                <h5 className="title">
                                    <span className="text-black-50 mb-1">Raffi & Nagita</span>
                                    <p style={{ fontSize: "0.8rem" }} className="text-black-50"> "photographer nya sat set parah"</p>
                                </h5>


                            </div>
                        </div>
                    </Col>
                    <Col className="mb-5 mb-lg-2" lg="3" md="6" sm="6" xs="5">
                        <div className="px-4">
                            <img
                                alt="..."
                                className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                src={require("assets/img/theme/team-4-800x800.jpg")}
                                style={{ width: "200px" }}
                            />
                            <div className="pt-4 text-center">
                                <h5 className="title">
                                    <span className="text-black-50 mb-1">Sidiq & Hanifah</span>
                                    <p style={{ fontSize: "0.8rem" }} className="text-black-50">Sekawan stories semoga sukses selalu</p>
                                </h5>
                            </div>
                        </div>
                    </Col>
                </Row>

            </CarouselItem>
        );
    });

    return (
        <div>
            <Carousel activeIndex={activeIndex} next={next} previous={previous} interval={5000}>
                <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}

                />
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />
            </Carousel>
        </div>
    );
}

export default Testimonials;