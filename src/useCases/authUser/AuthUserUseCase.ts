import { UserModel } from "../../entities";
import { IAuthUserDto } from "./IAuthUser.dto";
import errors from 'http-errors';
import { IHasherProvider, ITokenProvider } from "../../providers";

// Use case handle business rule
export class AuthUserUseCase {
    // Use the interface providers
    constructor(
        private hasherProvider: IHasherProvider,
        private tokenProvider: ITokenProvider
    ) { }

    async execute(data: IAuthUserDto) {
        const { username, password } = data;

        // find user and verify if exists
        const user = await UserModel.findOne({ username });
        if (!user) {
            throw new errors.NotFound('User not found');
        }

        // verify password
        if (!await this.hasherProvider.decrypt(password, user.password)) {
            throw new errors.Unauthorized('unauthorized');
        }

        // generate and returns the token
        return { token: await this.tokenProvider.generate({ _id: user._id, username: user.username }) };
    }
}