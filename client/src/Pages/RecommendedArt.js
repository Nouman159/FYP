import React, { useEffect } from 'react'
import Artwork1 from '../Assets/Artwork1.png';
import Artwork2 from '../Assets/Artwork2.png';

const RecommendedArt = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='Recommended-Art'>
            <section className='featured-artworks'>
                <h2>Featured Artworks</h2>
                <div className='artworks-container'>
                    {/* Replace the placeholders with actual artwork components */}
                    <div className='artwork'>
                        <img src={Artwork1} alt='Artwork 1' />
                        <h3>Artwork Title</h3>
                        <p>Artist: Artist Name</p>
                        <button>View Details</button>
                    </div>

                    <div className='artwork'>
                        <img src={Artwork2} alt='Artwork 2' />
                        <h3>Artwork Title</h3>
                        <p>Artist: Artist Name</p>
                        <button>View Details</button>
                    </div>
                    <div className='artwork'>
                        <img src={Artwork1} alt='Artwork 1' />
                        <h3>Artwork Title</h3>
                        <p>Artist: Artist Name</p>
                        <button>View Details</button>
                    </div>

                    <div className='artwork'>
                        <img src={Artwork2} alt='Artwork 2' />
                        <h3>Artwork Title</h3>
                        <p>Artist: Artist Name</p>
                        <button>View Details</button>
                    </div>

                    <div className='artwork'>
                        <img src={Artwork1} alt='Artwork 1' />
                        <h3>Artwork Title</h3>
                        <p>Artist: Artist Name</p>
                        <button>View Details</button>
                    </div>

                    <div className='artwork'>
                        <img src={Artwork2} alt='Artwork 2' />
                        <h3>Artwork Title</h3>
                        <p>Artist: Artist Name</p>
                        <button>View Details</button>
                    </div>


                    {/* Add more artworks as needed */}
                </div>
            </section>
        </div>
    )
};

export default RecommendedArt;