// Token Provider interface
export interface ITokenProvider {
    generate(payload: any): Promise<string>;
}