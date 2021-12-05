import { sign } from "jsonwebtoken";
import { ITokenProvider } from "..";

// JsonWebToken class implements token provider interface
export class JsonWebTokenProvider implements ITokenProvider {
    // Generate jsonwebtoken
    async generate(payload = {}): Promise<string> {
        return sign(payload, process.env.JWT_SECRET, {
            expiresIn: 86400
        });
    }
}