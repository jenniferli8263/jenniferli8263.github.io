import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import SkillBar from './SkillBar';

function About(){
    const languages = [
        {
            lang: "Python",
            time: 54,
        },
        {
            lang: "C/C++",
            time: 30,
        },
        {
            lang: "Java",
            time: 24,
        },
        {
            lang: "HTML/CSS/JavaScript",
            time: 15
        },
        {
            lang: "SQL",
            time: 10,
        },
    ];
    const langMax = 54;
    const technologies = [
        {
            tech: "Pandas/Numpy/Matplotlib",
            time: 36
        },
        {
            tech: "Flask",
            time: 18
        },
        {
            tech: "Git",
            time: 18
        },
        {
            tech: "AWS",
            time: 15
        },
        {
            tech: "Selenium",
            time: 12
        },
        {
            tech: "REACT",
            time: 10
        },
        {
            tech: "Node.js",
            time: 10
        },
        {
            tech: "Express",
            time: 6
        },
        {
            tech: "Spring Boot",
            time: 2
        },

    ];
    const techMax = 36;
    return(
        <section className = "about" id="about">
        <Container>
                <Row>
                    <Col>
                    <h1>About</h1>
                    <p>Hi! My name is Jennifer, and I am a second year software engineering student at the University of Waterloo.  I am passionate about AI, web development, and software applications in quantitative finance.</p>
                    <p>Beyond coding and engineering, I find joy in playing badminton, reading books, or going for a refreshing walk.</p>
                    <p>Currently seeking Summer 2026 internships</p>
                    </Col>
                </Row>
                <Row className="skills" id="skills">
                    <Col>
                        <h3>Languages</h3>
                        {
                        languages.map((language, index) => {
                            return (
                                <SkillBar 
                                key={index}
                                skill={language.lang}
                                time={language.time}
                                max = {langMax}
                                />
                            )
                        })
                        }
                    </Col>
                    <Col>
                        <h3>Technologies</h3>
                        {
                        technologies.map((technology, index) => {
                            return (
                                <SkillBar 
                                key={index}
                                skill={technology.tech}
                                time={technology.time}
                                max = {techMax}
                                />
                            )
                        })
                        }
                    </Col>
                </Row>
        </Container>
        </section>
    )
}

export default About;