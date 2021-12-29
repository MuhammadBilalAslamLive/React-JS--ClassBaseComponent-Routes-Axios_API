import React from 'react';
const Slider = () => {
    return ( 
    <>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://image.shutterstock.com/image-photo/team-medical-heroes-professionals-on-600w-1893959197.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://image.shutterstock.com/image-photo/smiling-asian-medical-doctor-600w-505770052.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://image.shutterstock.com/z/stock-photo-doctor-is-looking-away-with-worry-frustration-tiredness-and-exhausting-deep-feelings-1682226790.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </> );
}
 
export default Slider;