import { BcryptProvider } from "../../providers/implementation";
import { JsonWebTokenProvider } from "../../providers/implementation/JsonWebTokenProvider";
import { AuthUserController } from "./AuthUserController";
import { AuthUserUseCase } from "./AuthUserUseCase";

// Instantiate the auth user use case
const hasherProvider = new BcryptProvider();
const tokenProvider = new JsonWebTokenProvider();
const authUserUseCase = new AuthUserUseCase(hasherProvider, tokenProvider);
const authUserController = new AuthUserController(authUserUseCase);

export { authUserController };