import React from 'react'

function Testimonial() {
  return (
   <div>
  {/* Hero Start */}
  <div className="container-fluid bg-light page-header py-5 mb-5">
    <div className="container text-center py-5">
      <h1 className="display-1 animated slideInLeft">Testimonial</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center animated slideInLeft mb-0">
          <li className="breadcrumb-item"><a className="text-primary" href="#">Home</a></li>
          <li className="breadcrumb-item"><a className="text-primary" href="#">Pages</a></li>
          <li className="breadcrumb-item active" aria-current="page">Testimonial</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Hero End */}
  {/* Testimonial Start */}
  <div className="container-fluid py-5">
    <div className="container">
      <div className="text-center wow fadeIn" data-wow-delay="0.2s">
        <h1 className="font-dancing-script text-primary">Testimonial</h1>
        <h1 className="mb-5">What Clients Say!</h1>
      </div>
      <div className="owl-carousel testimonial-carousel wow fadeIn" data-wow-delay="0.3s">
        <div className="text-center bg-light p-4">
          <i className="fa fa-quote-left fa-3x mb-3" />
          <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat
            ipsum et lorem et sit.</p>
          <img className="img-fluid mx-auto border p-1 mb-3" src="img/testimonial-1.jpg" alt />
          <h4 className="mb-1">Client Name</h4>
          <span>Profession</span>
        </div>
        <div className="text-center bg-light p-4">
          <i className="fa fa-quote-left fa-3x mb-3" />
          <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat
            ipsum et lorem et sit.</p>
          <img className="img-fluid mx-auto border p-1 mb-3" src="img/testimonial-2.jpg" alt />
          <h4 className="mb-1">Client Name</h4>
          <span>Profession</span>
        </div>
        <div className="text-center bg-light p-4">
          <i className="fa fa-quote-left fa-3x mb-3" />
          <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat
            ipsum et lorem et sit.</p>
          <img className="img-fluid mx-auto border p-1 mb-3" src="img/testimonial-3.jpg" alt />
          <h4 className="mb-1">Client Name</h4>
          <span>Profession</span>
        </div>
        <div className="text-center bg-light p-4">
          <i className="fa fa-quote-left fa-3x mb-3" />
          <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat
            ipsum et lorem et sit.</p>
          <img className="img-fluid mx-auto border p-1 mb-3" src="img/testimonial-4.jpg" alt />
          <h4 className="mb-1">Client Name</h4>
          <span>Profession</span>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
</div>

  )
}

export default Testimonial
