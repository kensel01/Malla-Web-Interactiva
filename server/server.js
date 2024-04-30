import express from 'express';
import mongoose from 'mongoose';
import pg from 'pg';

const app = express();

// Conexión a MongoDB
mongoose.connect('mongodb://db_mongo/testdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Conexión a PostgreSQL
const pgClient = new pg.Client({
  host: 'db_postgres',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'testdb'
});

pgClient.connect()
  .then(() => console.log('Conectado a PostgreSQL'))
  .catch(err => console.error('Error al conectar a PostgreSQL:', err));

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});