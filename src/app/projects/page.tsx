import uniqid from "uniqid"
import ProjectContainer from "../components/projectContainer"

export default function Projects()  {

    const projects = [
  
        {
          name: 'LEARN ASCENT (MOBILE APPLICATION)',
          description:
            'Mobile Learning Management System (LMS) to deliver a feature-rich, scalable, and user-friendly solution that revolutionizes the way users engage with content on mobile devices.'                                                                                                                      ,
          stack: ['Flutter', 'Firebase', 'Material UI'],
          sourceCode: 'https://github.com/NisalWijethunga',
          livePreview: 'https://github.com/NisalWijethunga',
        },
        {
          name: 'Dose Diary Medicine management system',
          description:
            'An application designed to handle the operations of the medicine stock at the Noble Aged Nursing Care Home, built by React framework integrated with NodeJS and MSSQL Server.',
          stack: ['ReactJS', 'NodeJs', 'MYSQL Server'],
          sourceCode: 'https://github.com/NisalWijethunga',
          livePreview: 'https://github.com/NisalWijethunga',
        },
        {
          name: 'Flight Management System',
          description:
            'Phoenix Airline System is a web application with a seamless performing online flight booking system. Processes such as user management, flight management, and ticket management.',
          stack: ['ReactJS', 'JAVA', 'HTML'],
          sourceCode: 'https://github.com/NisalWijethunga',
          livePreview: 'https://github.com/NisalWijethunga',
        },
      ]
   
    if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}
