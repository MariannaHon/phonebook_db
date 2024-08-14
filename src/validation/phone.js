
import Joi from 'joi';

const addContactErrorMessages = {
    'string.base': 'Field {#label} must be a string.',
    'string.empty': 'Field {#label} cannot be empty.',
    'string.min': 'Field {#label} should have a minimum length of {#limit}.',
    'string.max': 'Field {#label} should have a maximum length of {#limit}.',
    'any.required': 'missing required {#label} field',
    'number.base': 'Field {#label} must be a number.',
    'number.empty': 'Field {#label} cannot be empty.'
};

export const createContactSchema = Joi.object({
    name: Joi.string().min(4).max(15).required().messages(addContactErrorMessages),
    number: Joi.string().min(9).max(20).required().messages(addContactErrorMessages),
});

export const updateContactSchema = Joi.object({
    name: Joi.string().min(4).max(15).messages(addContactErrorMessages),
    number: Joi.string().min(9).max(20).messages(addContactErrorMessages),
});
