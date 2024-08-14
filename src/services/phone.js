
import { ContactsCollection } from '../db/models/phone.js';

export const getAllContacts = async () => {

    const contacts = await ContactsCollection.find();
    return contacts;
};

export const createContact = async (payload) => {
    const contact = await ContactsCollection.create(payload);
    return contact;
};

export const patchContact = async (contactId, payload, options = {}) => {
    const rawResult = await ContactsCollection.findOneAndUpdate(
        { _id: contactId },
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

export const deleteContact = async (contactId) => {
    const contact = await ContactsCollection.findOneAndDelete({ _id: contactId });
    return contact;
};
