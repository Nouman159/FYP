import React, {useEffect} from 'react';

const ArtworkAuthentication = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h2 className="text-center">Artwork Authentication Request</h2>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="artworkSelection" className="form-label">Select Artwork:</label>
                                    <select className="form-select" id="artworkSelection" required>
                                        <option value="">Choose an artwork...</option>
                                        {/* Add dynamic options based on available artworks */}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="authenticationReason" className="form-label">Reason for Authentication:</label>
                                    <textarea className="form-control" id="authenticationReason" rows="3" required></textarea>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">Request Authentication</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtworkAuthentication;
