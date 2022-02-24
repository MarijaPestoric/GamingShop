import Card from './Card';
import './About.css';

const About = () => {
    const team = [
        {
            firstName: "Aleksandar",
            lastName: "Drašković",
            photo: "aco.jpg",
            position: "Frontend Developer",
            socials: [
                {
                    name: 'github',
                    url: 'https://github.com/adraskovic9'
                },
                {
                    name: 'linkedin',
                    url: 'https://www.linkedin.com/in/aleksandar-dra%C5%A1kovi%C4%87-106a55180/'
                }
            ]
        },
        {
            firstName: "Marija",
            lastName: "Pestorić",
            photo: "marija.jpg",
            position: "Frontend Developer",
            socials: [
                {
                    name: 'github',
                    url: 'https://github.com/MarijaPestoric'
                },
                {
                    name: 'linkedin',
                    url: 'https://www.linkedin.com/in/marija-pestoric-002519196/'
                }
            ]
            
        },
        {
            firstName: "Aleksa",
            lastName: "Vujošević",
            photo: "aleksa.jpg",
            position: "Backend Developer",
            socials: [
                {
                    name: 'github',
                    url: 'https://github.com/AleksaVu'
                },
                {
                    name: 'linkedin',
                    url: 'https://www.linkedin.com/in/aleksa-vujosevic/'
                }
            ]
        },
    ];

    return(
        <div className="container page-container">
            <h1 className="page-title">About us</h1>
            <div className="team-grid">
            {
                team.map((person, index) => <Card {...person} key={index}/>)
            }
            </div>
        </div>
    )
}

export default About;