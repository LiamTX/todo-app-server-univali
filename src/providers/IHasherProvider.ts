// Hasher provider interface
export interface IHasherProvider {
    encrypt(string: string, salt: number): Promise<string>;
    decrypt(string: string, encryptedString: string): Promise<boolean>;
}