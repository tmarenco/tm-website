import { TypeAnimation } from "react-type-animation";

const occupation = ['Software Developer', 1500, 'Front-End Explorer', 1500, 'Back-End Learner', 1500, 'Tech Curious', 1500, 'Agile Learner', 1500]


export const Home = () => {
  return (
    <>
      {/* <section className="d-flex align-items-center justify-content-center mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 align-self-center text-center text-md-start">
              <h3>Welcome! I am</h3>
              <h1>{name}</h1>
              <TypeAnimation
                    sequence={occupation}
                    speed={10}
                    wrapper="h2"
              />
            </div>
            <div className="col-12 col-md-3 align-self-center text-center text-md-start animate__animated animate__backInRight">
              <img src="/whiteLogoNoSpaces.png" alt="" className="w-75" />
            </div>
            <div className="col-12 col-md-6 code mt-5 mt-md-0">
              <div className="m-4">
                <p>1 const <strong className="text-info">myInfo</strong> = {'{' }</p>
                <p><span>2 <span className="ms-5">{'name: "Tomás Marenco"' }</span></span></p>
                <p><span>3 <span className="ms-5">{'occupation: "Software Developer"' }</span></span></p>
                <p><span>4 <span className="ms-5">{'age: 27'}</span></span></p>
                <p><span>5 <span className="ms-5">{'nacionality: "Argentina"'}</span></span></p>
                <p>6 {'}' }</p>
              </div>
            </div>
          </div>

        </div>
      </section> */}
      <section id='home' className="d-flex align-items-center justify-content-center min-vh-100 mt-5">
        <div className="w-75">
          <div className="row mb-3">
            <div className="col-12 col-md-6 align-self-center text-center text-md-start">
              <p className="big-text">Hey! I&apos;m <span className="title">Tomás</span></p>
              <TypeAnimation
                    sequence={occupation}
                    speed={10}
                    wrapper="h1"
                    repeat={Infinity}
              />
              <p className="opacity-75">Welcome! Here you will find my skills showcased, my story shared, and my experience unveiled. Connect with me through the form below. Excited to engage with you!</p>
              <button className="btn-send">RESUME</button>
            </div>
            <div className="col-12 col-md-6 align-self-center text-center mt-5 mt-lg-0 animate__animated animate__backInRight">
              <img src="/whiteLogoNoSpaces.png" alt="" className="w-50 home-logo" />



              {/* <div className="row">
                <div className="col-12 col-xl-6 order-xl-2">
                  <img src="/whiteLogoNoSpaces.png" alt="logo" className="img-fluid w-100" />
                </div>
                <div className="col-12 col-xl-6 order-xl-1">
                  <img src="" alt="" className="img-fluid d-xl-none" />
                </div>
              </div> */}

              {/* <div className="row">
                <div className="col-12 col-lg-6 order-lg-2">
                  <img src="/whiteLogoNoSpaces.png" alt="logo" className="img-fluid w-75" />
                </div>
                <div className="col-12 col-lg-6 order-lg-1">
                  <img src="" alt="" className="img-fluid d-lg-none" />
                </div>
              </div> */}


              
              {/* <div className="row">
                <div className="col-12 col-xl-6">
                  <img src="/whiteLogoNoSpaces.png" alt="logo" className="img-fluid" />
                </div>
              </div> */}


            </div>
          </div>
        </div>
      </section>
    </>
  )
}
