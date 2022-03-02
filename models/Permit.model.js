const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const permitSchema = new Schema(
  {
    email: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: Schema.Types.ObjectId,
        ref: 'Lake'
    },
    date: Date
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Permit = model("Permit", permitSchema);

module.exports = Permit;