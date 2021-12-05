import api from './api/api';
import connection from './database/connection';

// Connect to database
connection();

// Start api
const port = process.env.PORT || '3003';
api.listen(port, () => console.log('💻 Server started'));