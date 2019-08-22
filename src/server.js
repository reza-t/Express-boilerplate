import express from 'express';
import cors from 'cors';
import './middleware/dbConfig';

const app = express();
const port = 3000;

app.use(cors())

app.get('/', (req, res) => res.send('Server is up!'))
app.listen(port, () => console.log(`server started at port ${port}!`))

export default app;