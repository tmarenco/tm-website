
const { VITE_GITHUB_URL, VITE_LINKEDIN_URL } = import.meta.env;


export const IconLinks = () => {
  return (
    <>
    <section className="sect">
      <div className="text-center fs-3 me-3 mt-3">
          <a href={ VITE_GITHUB_URL } target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github icon"></i>
          </a>
          <a href={ VITE_LINKEDIN_URL } target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin icon"></i>
          </a>
      </div>
    </section>
    </>
  )
}
