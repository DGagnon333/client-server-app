# Serveur
Install Dependencies
```sh
npm install
```

Initialize the Database
```sh
npm run init-db
```

Start the Server
```sh
npm start
```
The server should now be running locally at http://localhost:5000.

## Routes et URL
Each file placed under ./server/routes/ will be an accessible route as follows:
`http://localhost:5000/api/<new-route>`

For example, once the server is running, you can quickly test it as follows:
```sh
curl http://localhost:5000/api/exercises
```

The following JSON should be returned:
```json
{
    "exercises": [
        {
            "id": 1,
            "name": "Push-ups"
        },
        {
            "id": 2,
            "name": "Sit-ups"
        },
        {
            "id": 3,
            "name": "Squats"
        }
     ]
}    
```

## Notes
> * The database is named `sysap.db`
> * The schema used for the database is `sysap-db-schema.sql`, which is located under `./server/db/` (additional tables can be added as needed).
> * You should check the .env files in the frontend and backend and modify them as needed.
> * In the .env file of the server, the PORT is set to 5000 (can be changed if needed or if the PORT is already in use).


For now, we are using an SQLite database initialized with the command:
```sh
npm run init-db
```

To reset the SQLite database:
```sh
npm run init-db -- --reset
```

## Et du côté frontend comment on fait les requêtes?
Here's an **example** of how to communicate with the server to fetch or create exercises:

```js
// ExerciseService.js
import axios from 'axios';
import { SERVER_BASE_URL } from '@env';

const serverURL = SERVER_BASE_URL || "http://localhost:5000";

const ExerciseService = {
  fetchExercises: async function () {
    try {
      const response = await axios.get(`${serverURL}/api/exercises`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  createExercise: async function (exerciseName) {
    try {
      const response = await axios.post(`${serverURL}/api/exercises`, { name: exerciseName });
      return response.data; 
    } catch (error) {
      throw error;
    }
  }
};

export default ExerciseService;
```
> Note that the `axios` package is used for GET and POST methods, but you can also use the fetch method, which comes with React Native.

Then, in a component to fetch exercises:
```jsx
const exercices = await ExerciseService.fetchExercises();
```

Or to create one:
```jsx
const createdExercise = await ExerciseService.createExercise(exerciseName);
```

### Dépendances
* express: A framework that provides features for handling routes, HTTP responses, middlewares, etc.
>* cors: The cors module is used to manage the Same-Origin Policy in an Express.js application. It allows you to allow or deny HTTP requests from different domains or origins.
>* dotenv: The dotenv module is used to load environment variables from a .env file.
>* express-rate-limit: Sets limits on the number of requests clients can make to the server.
>* sqlite3: Used for working with an SQLite database.