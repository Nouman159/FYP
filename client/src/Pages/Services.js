import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const Services = ({ isAuthenticated }) => {
    const role = 'user';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <section id="service">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Our Services</h3>
                            <h1 className="display-6 text-center mb-4">Our <b>Awesome</b> Services</h1>
                            <hr className="w-25 mx-auto " />
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <div className="card p-3">
                                    <div className="card-body text-center">
                                        <i className="fa fa-paint-brush fa-4x mb-4 text-primary"></i>
                                        <NavLink to="/artregistration" className="black-link">
                                            <h5 className="card-title mb-3 fs-4 fw-bold">Art Registration</h5>
                                        </NavLink>
                                        <p className="card-text lead">Register your artwork and showcase it to art enthusiasts around the globe.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-3">
                                    <div className="card-body text-center">
                                        <i className="fa fa-thumbs-up fa-4x mb-4 text-primary"></i>
                                        <NavLink to="/artrecommendation" className="black-link">
                                            <h5 className="card-title mb-3 fs-4 fw-bold">Art Recommendation</h5>
                                        </NavLink>
                                        <p className="card-text lead">Discover personalized art recommendations based on your taste and preferences.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-3">
                                    <div className="card-body text-center">
                                        <i className="fa fa-gavel fa-4x mb-4 text-primary"></i>
                                        <NavLink to="/liveartauctions" className="black-link">
                                            <h5 className="card-title mb-3 fs-4 fw-bold">Live Art Auctions</h5>
                                        </NavLink>
                                        <p className="card-text lead">Participate in real-time art auctions and bid on your favorite pieces.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <div className="card p-3">
                                    <div className="card-body text-center">
                                        <i className="fa fa-paper-plane fa-4x mb-4 text-primary"></i>
                                        <NavLink to="/commissionedartwork" className="black-link">
                                            <h5 className="card-title mb-3 fs-4 fw-bold">Commissioned Artwork Request</h5>
                                        </NavLink>
                                        <p className="card-text lead">Request a custom artwork from your favorite artists tailored to your preferences.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-3">
                                    <div className="card-body text-center">
                                        <i className="fa fa-archive fa-4x mb-4 text-primary"></i>
                                        <NavLink to="/curatedcollections" className="black-link">
                                            <h5 className="card-title mb-3 fs-4 fw-bold">Curated Collections</h5>
                                        </NavLink>
                                        <p className="card-text lead">Explore curated collections of exceptional artworks and unique masterpieces.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-3">
                                    <div className="card-body text-center">
                                        <i className="fa fa-check-circle fa-4x mb-4 text-primary"></i>
                                        <h5 className="card-title mb-3 fs-4 fw-bold">Artwork Authentication Services</h5>
                                        <p className="card-text lead">Ensure the authenticity and value of your artwork with our reliable authentication services.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
