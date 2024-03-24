import {  useState } from "react"
import { motion } from 'framer-motion'


const myStack = ['HTML', 'CSS', 'Javascript', 'Typescript', 'Node.js', 'Bootstrap', 'React', 'Angular', 'Next.js'];

const modifyTechnologies = (itemsToDelete, itemsToAdd) => {
  let modifiedArray = [...myStack];

  itemsToDelete.forEach(item => {
    const index = modifiedArray.indexOf(item);
    if (index !== -1) {
      modifiedArray.splice(index, 1);
    }
  });


  modifiedArray = modifiedArray.concat(itemsToAdd);

  return modifiedArray;
} 

const jobs = [
  {
    logo: '/genit.png',
    companyName: 'Gen IT',
    timeThere: 'October 2021 - Present Day',
    description: 'At Gen IT, I jumped into my software career with excitement, diving into coding tasks for diverse projects. Each day brought new challenges, fueling my passion for coding. While client meetings refined my communication skills, it was the hands-on coding experience that truly sparked my enthusiasm and drove my desire for self-improvement.',
    technologies: modifyTechnologies([], ['AdonisJS']),
  },
  {
    logo: '/whiteLogoNoSpaces.png',
    companyName: 'Ongoing Skill Growth',
    timeThere: 'September 2020 - Present Day',
    description: 'Beyond formal roles, I immerse myself in perpetual learning and hands-on practice. Daily online courses and personal website projects are my playground for honing skills. Applying new concepts in real-time cultivates my adaptability and innovative thinking. This self-motivated journey fuels my growth as a developer.',
    technologies: myStack
  },
  {
    logo: '/digitalHouse.jpg',
    companyName: 'Digital House',
    timeThere: 'September 2020 - May 2021',
    description: 'I completed an intensive training program at Digital House, where I gained a solid understanding of full stack development. The program concluded with the creation of a functional e-commerce app. This educational experience kindled my passion for coding and provided me with a strong foundation in technical skills.',
    technologies: modifyTechnologies(['Typescript', 'Bootstrap', 'Angular'], [])
  }
]


export const Experience = () => {

  const getJob = ( jobName ) => {
    return jobs.find(job => job.companyName === jobName)
  };

  const [activeJob, setActiveJob] = useState(getJob('Gen IT'));

  const onSelectJob = (selectedJob) => {
    setActiveJob(getJob(selectedJob))
  };


  return (
    <>
        <section id='experience' className="d-flex align-items-center justify-content-center min-vh-100 sect">
          <div className="w-75">
            <div className="text-center my-5">
              <h1 className="title">EXPERIENCE</h1>
              <p>My journey so far</p>
            </div>
            <div className="row">
              <div className="col-12 col-md-3 align-self-center my-5 job-list">
                  <ul className="list-group flex-md-column flex-row justify-content-center">
                    {
                      jobs.map(job => (
                        <li 
                          className={`list-unstyled mt-0 mt-md-5 job-item ${job.companyName === activeJob.companyName ? 'job-selected' : ''}`}
                          key={ job.companyName }
                          onClick={ ()=> onSelectJob(job.companyName)}
                        >
                          {job.companyName}
                        </li>
                      ))
                    }
                  </ul>
              </div>
              <motion.div 
                className="col-12 col-md-9"
                key={activeJob.companyName}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <div className="row experience-head align-items-center">
                    <div className="col-6 align-self-center">
                      <h1>{ activeJob.companyName }</h1>
                    </div>
                    <div className="col-6 text-end">
                      <div className="row">
                        <div className="col-12 col-lg-6 order-lg-2">
                          <img src={activeJob.logo} alt="" className="img-fluid w-75" />
                        </div>
                        <div className="col-12 col-lg-6 order-lg-1">
                          <img src="" alt="" className="img-fluid d-lg-none" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>{ activeJob.timeThere }</p>
                  <p>{ activeJob.description }</p>
                  <h3>Technologies:</h3>
                  <ul className="list-group list-group-horizontal mt-4 row pill-items">
                    {
                      activeJob.technologies.map(technology => (
                        <div key={ technology } className="justify-content-center technology-item ms-2 mt-3">
                          <li className="list-unstyled">{technology}</li>
                        </div>
                      )) 
                    }
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
    </>
  )
}
