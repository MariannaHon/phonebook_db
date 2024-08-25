import { model, Schema } from 'mongoose';

const contactsSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        number: {
            type: String,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId, ref: 'users', required: true,
        }
    },

    {
        timestamps: true,
        versionKey: false,
    },
);

export const ContactsCollection = model('phone-books', contactsSchema);
