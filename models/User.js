const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        minlength: [4, "Username must be at least 4 characters"],
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                var emailRegex = /^[A-Za-z0-9+_.-]+@(.+)$/;
                return emailRegex.test(value);
            },
            message: "Email must be of valid format"
        },
    },
    address: {
        street: {
            type: String,
            required: true
        },
        suite: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true,
            validate: {
                validator: function (value) {
                    var alphaSpaceRegex = /^[a-zA-Z ]*$/;
                    return alphaSpaceRegex.test(value);
                },
                message: "City must be of valid format"
            },
        },
        zipcode: {
            type: String,
            required: true,
            validate: {
                validator: function (value) {
                    var zipRegex = /^\d{5}-\d{4}$/gm;
                    return zipRegex.test(value);
                },
                message: "Zipcode must be of valid format"
            },
        },
        geo: {
            lat: {
                type: Number,
                required: true
            },
            lng: {
                type: Number,
                required: true
            }
        },
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                var phoneRegex = /^\d{1}-\d{3}-\d{3}-\d{4}$/gm
                return phoneRegex.test(value);
            },
            message: "Phone number must be of valid format"
        },
    },
    website: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                var webRegex = /^((http|https):\/\/)([A-z]+)\.([A-z]{2,})/
                return webRegex.test(value);
            },
            message: "Website must be of valid format"
        },
    },
    company: {
        name: {
            type: String,
            required: true
        },
        catchPhrase: {
            type: String,
            required: true
        },
        bs: {
            type: String,
            required: true
        },
    },
});

//Create model
const User = mongoose.model("User", UserSchema);
module.exports = User;

