

const mongoose = require('mongoose')


const masterSchema = new mongoose.Schema({
    balance: { type: Number, required: true }
}, {
    timestamps: true
})

module.exports = mongoose.model("master", masterSchema)