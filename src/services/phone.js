
import { ContactsCollection } from '../db/models/phone.js';

export const getAllContacts = async (userId) => {

    const contacts = await ContactsCollection.find({ userId });
    return contacts;
};

export const createContact = async (payload) => {
    const contact = await ContactsCollection.create(payload);
    return contact;
};

export const patchContact = async (contactId, userId, payload, options = {}) => {
    const rawResult = await ContactsCollection.findOneAndUpdate(
        { _id: contactId, userId },
        payload,
        {
            new: true,
            includeResultMetadata: true,
            ...options,
        });

    if (!rawResult || !rawResult.value) return null;

    return {
        contact: rawResult.value,
        isNew: Boolean(rawResult?.lastErrorObject?.upserted),
    };
};

export const deleteContact = async (contactId, userId) => {
    const contact = await ContactsCollection.findOneAndDelete({ _id: contactId, userId });
    return contact;
};
