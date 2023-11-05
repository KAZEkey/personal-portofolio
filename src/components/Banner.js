import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [LoopNum, setLoopNum] = useState(0);
    const [isDeleting, setDeleting] = useState(false);
    const [text, setText] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ["Frontend Developer", "Website Developer", "UI/UX Designer" ];
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = LoopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2);
        }

        if (!isDeleting && updatedText === fullText) {
            setDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setDeleting(false);
            setLoopNum(LoopNum + 1);
            setDelta(500);
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={5} xl={7}>
                        <span className="tagline">Welcome to my Portofolio</span>
                        <h1>{'Hi IM KAZE '}</h1>
                        <h1><span className="warp">{text}</span></h1>
                        <p>Halo, saya KAZEkey. Saya seorang desainer grafis yang bersemangat untuk menciptakan visual yang menarik dan berdampak. Dalam pekerjaan saya, saya mencampurkan kreativitas dan keahlian teknis untuk menghasilkan desain yang memikat dan efektif.</p>
                        <button onClick={() => console.log('connect')}>Let’s Connect<ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}