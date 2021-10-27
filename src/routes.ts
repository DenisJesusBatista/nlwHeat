import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { ensureAutheticated } from "./middleware/ensureAutheticated";


const router = Router()

router.post("/authenticate", new AuthenticateUserController().handle);


router.post(
    "/messages",
    ensureAutheticated,
    new CreateMessageController().handle
);

export { router }