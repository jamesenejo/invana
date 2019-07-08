import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import jsend from 'jsend';
import morgan from 'morgan';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('combined'));
app.use(jsend.middleware);

app.get('*', (req, res) => res.jsend.success('Project started'));

const port = parseInt(process.env.PORT, 10) || 4000;

app.listen(port, () => console.log(`Live at ${port}`));
