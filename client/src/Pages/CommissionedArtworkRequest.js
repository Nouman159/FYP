import React, {useEffect} from 'react';

const CommissionArtworkRequest = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h2 className="text-center">Commission Artwork Request</h2>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="artworkDetails" className="form-label">Artwork Details:</label>
                                    <textarea className="form-control" id="artworkDetails" rows="3" required></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="commissionRequirements" className="form-label">Commission Requirements:</label>
                                    <textarea className="form-control" id="commissionRequirements" rows="3" required></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="budget" className="form-label">Budget:</label>
                                    <input type="text" className="form-control" id="budget" required />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">Submit Request</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommissionArtworkRequest;
