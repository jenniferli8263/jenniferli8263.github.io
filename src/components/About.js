import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import SkillBar from './SkillBar';

function About(){
    const languages = [
        {
            lang: "Python",
            time: 60,
        },
        {
            lang: "JavaScript/TypeScript",
            time: 30,
        },
        {
            lang: "Java",
            time: 30,
        },
        {
            lang: "C/C++",
            time: 30,
        },
        {
            lang: "HTML/CSS",
            time: 24
        },
        {
            lang: "SQL",
            time: 18,
        },
        {
            lang: "Ruby",
            time: 10
        },
    ];
    const langMax = 54;
    const technologies = [
        {
            tech: "React/Next.js",
            time: 36
        },
        {
            tech: "Node.js",
            time: 30
        },
        {
            tech: "FastAPI",
            time: 24
        },
        {
            tech: "Spring Boot",
            time: 24
        },
        {
            tech: "AWS",
            time: 24
        },
        {
            tech: "Pandas, Numpy, Scikit-learn, PyTorch",
            time: 24
        },
        {
            tech: "Git",
            time: 24
        },
        {
            tech: "Ruby on Rails",
            time: 12
        },
        {
            tech: "Kafka",
            time: 12
        },
        {
            tech: "Docker",
            time: 4
        },
        {
            tech: "Kubernetes",
            time: 4
        },

    ];
    const techMax = 36;
    return(
        <section className = "about" id="about">
        <Container>
                <Row>
                    <Col>
                    <h1>About</h1>
                    <p>Hi! My name is Jennifer, and I am a 3rd year software engineering student at the University of Waterloo. I am passionate about backend development, AI, and software applications in quantitative finance.</p>
                    <p>When I'm not coding, you can find me playing badminton, running, or watching Formula 1 :)</p>
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