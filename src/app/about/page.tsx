export default function About() {
    const about = {
        name: 'Nisal Wijethunga',
        role: 'Software Developer',
        description:
          'As a versatile software developer, I specialize in crafting robust solutions across multiple platforms, leveraging my expertise in Java, Flutter, and React.js. With a strong foundation in Java, I excel in building scalable backend systems, enterprise applications, and Android mobile apps. My proficiency extends to utilizing Java frameworks like Spring and Hibernate to streamline development processes and enhance project efficiency.',
        resume: '',
        social: {
          linkedin: 'https://www.linkedin.com/in/nisal-wijethunge/',
          github: 'https://github.com/NisalWijethunga',
        },
    };

        const { name, role, description, resume, social } = about
    return(
        <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'> {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            {/* <span type='button' className='btn btn--outline'>
              Resume
            </span> */}
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                {/* <GitHubIcon /> */}
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                {/* <LinkedInIcon /> */}
              </a>
            )}
          </>
        )}
      </div>
      
    </div>
    )
}