import uniqid from 'uniqid'

export default function Skills(){
    const skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'React',
        'JAVA',
        'Flutter',
        'Material UI',
        'Git',
        'PHP',
        'MYSQL',
        'Firebase',
      ]
    if (!skills.length) return null
    
    return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
    );
}