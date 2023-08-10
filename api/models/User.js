const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            validate: {
                validator: function(value) {
                    return /\S+@\S+\.\S+/.test(value);
                },
                message: props => `${props.value} is not a valid email address`,
            }
        },
        password: {
            type: String,
            required: true,
            minLength: 6,
        },
    },
    { timestamps: true }
);

// userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);
