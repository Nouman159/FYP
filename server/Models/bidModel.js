const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
    auction: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Auction",
        required: true,
    },
    bid_price: {
        type: String,
        required: true
    },
},
    { timestamps: true }
);

const Bid = mongoose.model("Bid", bidSchema);

module.exports = Bid;