import { compareSync, hashSync } from "bcrypt";
import { IHasherProvider } from "..";

// Bcrypt class implements hasher provider interface
export class BcryptProvider implements IHasherProvider {
    // Encrypt string
    async encrypt(string: string, salt: number): Promise<string> {
        return hashSync(string, salt);
    }
    // Verify encrypted string
    async decrypt(string: string, encryptedString: string): Promise<boolean> {
        return compareSync(string, encryptedString);
    }
}