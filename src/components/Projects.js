import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectsCard } from "./ProjectCard";
import { ProjectsCard2 } from "./ProjectCard2";
import { ProjectsCard3 } from "./ProjectCard3";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projimg4 from "../assets/img/projects1.png";
import projimg5 from "../assets/img/projects2.png";
import projimg6 from "../assets/img/projects3.png";
import projimg7 from "../assets/img/projects4.png";
import projimg8 from "../assets/img/projects5.png";
import projimg9 from "../assets/img/projects6.png";
import projimg10 from "../assets/img/projects7.png";
import projimg11 from "../assets/img/projects8.png";
import projimg12 from "../assets/img/projects9.png";
import projimg13 from "../assets/img/projects10.png";
import projimg14 from "../assets/img/projects11.png";
import projimg15 from "../assets/img/projects12.png";


export const Projects = () => {

    const projects = [
            {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
            },
            {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
            },
            {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
            },
            {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
            },
            {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
            },
            {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
            },
            
        ];

        const Projects2 = [
            {
            title: "UI/UX Design",
            description: "Design & Development",
            imgUrl: projimg4,
            },
            {
            title: "UI/UX Design",
            description: "Design & Development",
            imgUrl: projimg5,
            },
            {
            title: "UI/UX Design",
            description: "Design & Development",
            imgUrl: projimg6,
            },
            {
            title: "UI/UX Design",
            description: "Design & Development",
            imgUrl: projimg7,
            },
            {
            title: "UI/UX Design",
            description: "Design & Development",
            imgUrl: projimg8,
            },
            {
            title: "UI/UX Design",
            description: "Design & Development",
            imgUrl: projimg9,
            },
            ];
        
        const projects3 = [
            {
            title: "3D Design",
            description: "Design & Development",
            imgUrl: projimg10,
            },
            {
            title: "3D Design",
            description: "Design & Development",
            imgUrl: projimg11,
            },
            {
            title: "3D Design",
            description: "Design & Development",
            imgUrl: projimg12,
            },
            {
            title: "3D Design",
            description: "Design & Development",
            imgUrl: projimg13,
            },
            {
            title: "3D Design",
            description: "Design & Development",
            imgUrl: projimg14,
            },
            {
            title: "UI/UX Design",
            description: "Design & Development",
            imgUrl: projimg15,
            },
            ];
        
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>My Projects</h2>
                <p>Dalam proyek desain grafis UI/UX website terbaru saya, saya berupaya untuk mengubah pengalaman pengguna secara keseluruhan. Fokus utama Saya adalah menciptakan tampilan yang segar dan modern, serta meningkatkan kegunaan dan navigasi situs. Saya merancang tata letak yang intuitif dan bersih, dengan elemen-elemen visual yang menarik untuk menarik perhatian pengunjung. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Figma</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">3D Design</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first"> 
                            <Row>
                                {
                                    projects.map((projects, index) => {
                                        return (
                                            <ProjectsCard
                                                key={index}
                                                {...projects}
                                                />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <Row>
                                {
                                Projects2.map((projects2, index) => {
                                        return (
                                            <ProjectsCard2
                                                key={index}
                                                {...projects2}
                                                />
                                        )
                                    })
                                }
                            </Row>
                            </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <Row>
                                {
                                    projects3.map((projects3, index) => {
                                        return (
                                            <ProjectsCard3
                                                key={index}
                                                {...projects3}
                                                />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}

