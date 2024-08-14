
import { Router } from "express";
import { getContactsController, createContactController, patchContactController, deleteContactController } from "../controllers/phone.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createContactSchema } from '../validation/phone.js';
import { updateContactSchema } from "../validation/phone.js";
import { isValidId } from "../middlewares/isValidId.js";


const router = Router();

router.get('/', ctrlWrapper(getContactsController));

router.post('/', validateBody(createContactSchema), ctrlWrapper(createContactController));

router.patch('/:contactId', isValidId, validateBody(updateContactSchema), ctrlWrapper(patchContactController));

router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));


export default router;
