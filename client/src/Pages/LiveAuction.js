import React, { useEffect } from 'react';

const LiveAuction = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const ongoingAuctions = [
        {
            id: 1,
            artworkName: 'Artwork 1',
            basePrice: '$500',
            highestBid: '$700',
            timeLeft: '2h 30m',
        },
        {
            id: 2,
            artworkName: 'Artwork 2',
            basePrice: '$300',
            highestBid: '$450',
            timeLeft: '1h 45m',
        },
        {
            id: 3,
            artworkName: 'Artwork 3',
            basePrice: '$700',
            highestBid: '$900',
            timeLeft: '3h 15m',
        },
        // Add more ongoing auctions as needed
    ];

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center mb-4">Ongoing Auctions</h2>
                </div>
            </div>
            <div className="row">
                {ongoingAuctions.map((auction) => (
                    <div key={auction.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img
                                src={`https://via.placeholder.com/300x200?text=${auction.artworkName}`}
                                alt={auction.artworkName}
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{auction.artworkName}</h5>
                                <p className="card-text">Base Price: {auction.basePrice}</p>
                                <p className="card-text">Highest Bid: {auction.highestBid}</p>
                                <p className="card-text">Time Left: {auction.timeLeft}</p>
                                <a href="#" className="btn btn-primary">
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LiveAuction;
