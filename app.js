const fs = require('fs');
const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 6969;

const app = express();
const objects = {};
const methods = ['GET', 'POST', 'PATCH', 'DELETE'];

const config = path.join(__dirname, 'config');
const data = path.join(__dirname, 'data');

let dataset = [], files = [];

app.use((req, res, next) => {
  console.log(req.path);
  next();
});
app.use(express.json());
try {
  dataset = fs.readdirSync(data);
} catch(err) {
  console.log("no data file !!!");
};
dataset.forEach((file_name) => {
  file_name = path.join(data,  file_name);
  if (fs.statSync(file_name).isFile() && file_name.endsWith('.js')) {
    const file = require(file_name);
    Object.keys(file).forEach((key) => {
      objects[key] = file[key];
    });
  }
});

try {
  files = fs.readdirSync(config);
} catch(err) {
  console.log("no config file !!!");
};

files.forEach((file_name) => {
  file_name = path.join(config, file_name);
  if (fs.statSync(file_name).isFile() && file_name.endsWith('.js')) {
    const file = require(file_name);
    Object.keys(file).forEach((key) => {
      const route = file[key];
      if (typeof(route.path) === 'string' && typeof(route.method) === 'string' && methods.indexOf(route.method) > -1) {
        let action = ()=>{};
        if (typeof(route.action) === 'function') {
          action = route.action;
        }
        app[route.method.toLowerCase()](route.path, (req, res) => action(key, objects, req, res));
        console.log(`path: ${route.path}, endpoint: ${route.method}`);
      }
    });
  }
});



app.use('*', (req, res, next) => {
  res.sendStatus(400);
  next();
});

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
