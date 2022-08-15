import { InputAuthentication } from "../../../src/business/dto/useCases/authentication/auth";
import { InputLogin } from "../../../src/presentation/serializers/authenticate/LoginValidator";

export const fakeInputAuthenticate: InputAuthentication = {
  email: "valid@email.com",
  password: "fakePassword",
};

export const fakeInputLogin: InputLogin = {
  email: "valid@email.com",
  password: "fakePassword",
};
