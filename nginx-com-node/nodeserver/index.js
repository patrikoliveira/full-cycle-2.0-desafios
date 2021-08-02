const express = require('express');
const app = express();
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'docker',
  database: 'node_app_db'
}

async function connect () {
  const mysql = require('mysql2/promise');
  return await mysql.createConnection(config);
}

const inserDataInitalData = async () => {
  const conn = await connect();

  const sql = `INSERT INTO people(name) 
  VALUES ('Taipyaba'),
  ('Zeflo'),
  ('Koclo'),
  ('Orvu')  
  `;
  
  await conn.query(sql);
}

(async () => {
  await inserDataInitalData();
})();

app.get('/', async (req, res) => {

  const conn = await connect();
  const [rows] = await conn.query('SELECT * FROM people');
  const people = rows.map((ele) => `<li>${ele.name}</li>`).join('');
  res.send(`<h1>Full Cycle Rocks!</h1><br />${people}`);
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
