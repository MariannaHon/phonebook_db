
import { getAllContacts, createContact, patchContact, deleteContact } from "../services/phone.js";

import createHttpError from 'http-errors';


export const getContactsController = async (req, res) => {

    const contacts = await getAllContacts();

    res.json({
        status: 200,
        message: "Successfully found contacts!",
        data: contacts,
    });
};

export const createContactController = async (req, res) => {

    const contact = await createContact(req.body);

    res.status(201).json({
        status: 201,
        message: "Successfully created a contact!",
        data: contact,
    });
};

export const patchContactController = async (req, res, next) => {
    const { contactId } = req.params;

    const result = await patchContact(contactId, req.body);

    if (!result) {
        next(createHttpError(404, 'Contact not found'));
        return;
    }

    res.json({
        status: 200,
        message: "Successfully patched a contact!",
        data: result.contact,
    });
};

export const deleteContactController = async (req, res, next) => {
    const { contactId } = req.params;
    const delContact = await deleteContact(contactId);

    if (!delContact) {
        next(createHttpError(404, 'Contact not found'));
        return;
    }

    res.status(204).send();
};
