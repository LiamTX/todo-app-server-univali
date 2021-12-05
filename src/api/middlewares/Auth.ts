import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserModel } from "../../entities";

// JsonWebToken middleware, auth user
export default async (req: Request, res: Response, next: NextFunction) => {
    // Get authorization header
    const header = req.header('Authorization');
    if (!header) {
        return res.status(401).json({ message: 'authorization_token_required' });
    }

    // Verify token format
    const parts = header.split(' ');
    if (parts.length === 1) {
        return res.status(401).json({ message: 'token_badly_formated' });
    }

    // Verify if is type bearer
    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).json({ message: 'not_bearer_type' });
    }

    // Decode token and verify user
    verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) return res.status(401).json({ message: 'err_verify_token' });

        const { username } = decoded;
        const user = await UserModel.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'user_not_found' });
        }

        if (user.username != username) {
            return res.status(401).json({ message: 'unauthorized' });
        }

        req.body.user = decoded;

        next();
    });
}