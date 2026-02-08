// import './App.css'
import Carousel2 from '../imges/2023-02-28.jpg'
import Carousel3 from '../imges/2023-07-20.jpg'

function House()
{
    return(
        <>
                   <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={require('../imges/1st.jpg')} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Beautiful interior</h5>
                            <p>Coffee and friends make the perfect blend.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Carousel2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Different Mocktails </h5>
                            <p>Making memories, one mocktail at a time.
                                <br />
                            Mocktails: Taste the difference.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Carousel3} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Comfortable Sitting</h5>
                            <p>Coffee is our love language</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
          <br />
            <div className="row">
                <div className="col-lg-6">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/bQCueqiLmIg?si=bNt9yBPoofHEp5Im&amp;start=15" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="col-lg-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15284.785510418384!2d74.241306!3d16.7170506!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc101faccf73f09%3A0x99b1fe62628fefa4!2sCelebration%20Cafe%20Day!5e0!3m2!1sen!2sin!4v1721751813220!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>         
          
        </>
    )
};

export default House;
