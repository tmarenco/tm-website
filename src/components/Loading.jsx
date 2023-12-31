import loading from './../assets/loading.svg'


export const Loading = () => {
  return (
    <>
        <div className="row justify-content-center mt-5">
            <img src={ loading } className="loading" alt="logo" />
        </div>
    </>
  )
}
