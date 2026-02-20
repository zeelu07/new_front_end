import React from 'react'

function Not404() {
  return (
    <div>
  {/* Hero Start */}
  <div className="container-fluid bg-light page-header py-5 mb-5">
    <div className="container text-center py-5">
      <h1 className="display-1 animated slideInLeft">404 Error</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center animated slideInLeft mb-0">
          <li className="breadcrumb-item"><a className="text-primary" href="#">Home</a></li>
          <li className="breadcrumb-item"><a className="text-primary" href="#">Pages</a></li>
          <li className="breadcrumb-item active" aria-current="page">404 Error</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Hero End */}
  {/* 404 Start */}
  <div className="container-fluid py-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <i className="bi bi-exclamation-triangle display-1 text-primary" />
          <h1 className="display-1">404</h1>
          <h1 className="mb-4">Page Not Found</h1>
          <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to
            our home page or try to use a search?</p>
          <a className="btn btn-primary py-3 px-4" href>Go Back To Home</a>
        </div>
      </div>
    </div>
  </div>
  {/* 404 End */}
</div>

  )
}

export default Not404
