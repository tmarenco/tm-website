const skills = [
    {
        name: 'React',
        path: '/react.png'
    },
    {
        name: 'Angular',
        path: '/angular.png'
    },
    {
        name: 'Bootstrap',
        path: '/bootstrap.png'
    },
    {
        name: 'CSS',
        path: '/css.png'
    },
    {
        name: 'HTML',
        path: '/html.png'
    },
    {
        name: 'Javascript',
        path: '/javascript.png'
    },
    {
        name: 'Node Js',
        path: '/nodejs.png'
    },
    {
        name: 'Typescript',
        path: '/typescript.png'
    }
    
    
]



export const Skills = () => {
  return (
    <>
        <section id='skills' className="d-flex align-items-center justify-content-center min-vh-100 sect">
            <div className="w-75">
                <div className="text-center my-5">
                    <h1 className="title">SKILLS</h1>
                    <p>Some of the technologies that i am familiar with</p>
                </div>
                <div className="row text-center justify-content-center">
                    {
                        skills.map(skill => (
                            <div className="col-8 col-md-4 col-lg-3" key={skill.name}>
                                <div className="position-relative p-3">
                                    <div className="rounded p-3 mt-n3 mb-n3 glowing-border">
                                        <div className="d-flex justify-content-center">
                                            <div className="logo-container">
                                                <img className="w-100 h-100" src={skill.path} alt="Logo" />
                                            </div>
                                        </div>
                                        <h4 className="mt-3">{skill.name}</h4>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <h3 className="text-center mt-5">And more to come...</h3>
            </div>
        </section>
    </>
  )
}
