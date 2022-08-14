import LoginController from "../../../../presentation/controllers/authenticate/LoginController";
import makeAuthenticateUseCase from "../../useCases/authenticate/makeAuthenticateUseCase";

export default function makeLoginController(): LoginController {
  return new LoginController(makeAuthenticateUseCase());
}
