import {Container, Row , Col} from "react-bootstrap"
import my_photo from "../assets/img/My_photo.webp"
import { ArrowRightCircle } from "react-bootstrap-icons"
import {useState, useEffect} from "react";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Full Stack Developer", "Software Engineer", "Web Designer", "Graphic Designer" ];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
        tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
        } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(100);
        } else {
        setIndex(prevIndex => prevIndex + 1);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className='Align-items-center'>
                    <Col xs={12} md={6} xl={5} className="d-flex justify-content-center align-items-center">
                    <img src={my_photo} className="home_img mb-5" alt="my_photo"></img>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                    <h2></h2>
                    <h2>Hey, I'M </h2>
                    <h1><span style={{ color: "#b675e8" }}> EBY CHACKO</span></h1>
                    <h2 className="wrap">{text} <span className="cursor">|</span></h2>
                    <button className="connect_btn" onClick={() => console.log('Connect')}>Let's Connect<ArrowRightCircle size={25}></ArrowRightCircle></button>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}