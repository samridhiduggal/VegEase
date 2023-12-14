import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    email : String,
    address: String,
    city: String,
    state: String,
    zipcode: Number,
    creditNo: String,
    expMonth: Number,
    expYear: Number,
    CVV: Number,
    orderedItems: [{
            productName: String,
            quantity: Number
        }
    ],
    createdAt:{
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
