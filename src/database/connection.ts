import { connect } from 'mongoose';

// Start connection to mongo database
export default async () => connect(process.env.MONGO_URI, () => {
    console.log('Database connected');
});

import '../entities/Todo';
import '../entities/User';