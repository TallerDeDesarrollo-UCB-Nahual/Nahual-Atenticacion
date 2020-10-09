# Nahual-Atenticacion
From your CLI inside the folder Nahual-Atenticacion run the following command:

npm install

Make sure you have modified the database configurations inside config/config.json

To run migrations use the following command inside the folder Nahual-Atenticacion only use this command once when the schema is not set:

npx sequelize-cli db:migrate

To run the seeds use the following command it is only needed in a local/development environment, avoid to use it in production :

npx sequelize-cli db:seed:all