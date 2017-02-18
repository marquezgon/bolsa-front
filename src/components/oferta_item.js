import React from 'react';

const OfertaItem = (props) => {
  return (
    <div className="item">
      <div className="row">
        <div className="col-md-1 hidden-sm hidden-xs"><div className="img-item"><img src="/images/company-logo/1.jpg" alt="" /></div></div>
        <div className="col-md-11">
          <h3 className="no-margin-top"><a href="job_details.html" className="">Backend Developer <i className="fa fa-link color-white-mute font-1x"></i></a></h3>
          <h5><span className="color-black">CollegeHumor</span> - <span className="color-white-mute">New York, NY 10011 (Chelsea area)</span></h5>
          <p className="text-truncate ">Back-end development experience in PHP 5, and a strong understanding of Object Oriented Programming within an MVC framework</p>
          <div>
            <span className="color-white-mute">16 hours ago</span> -
            <a href="#need-login" data-toggle="modal" className="btn btn-xs btn-theme btn-default">save job</a> -
            <a href="#modal-email" data-toggle="modal" className="btn btn-theme btn-xs btn-default">email</a> -
            <a href="#" className="btn btn-theme btn-xs btn-default">more ...</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfertaItem;
