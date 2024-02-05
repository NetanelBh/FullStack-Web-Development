import express from 'express';
import cors from 'cors';
// mount a GraphQL API server on the '/graphql' HTTP endpoint:
import { buildSchema } from 'graphql';
import {graphqlHTTP} from 'express-graphql';

import * as persSrv from './services/personsService.js';

// construct a schema, using GraphQL schema language
const schema = buildSchema(`
  input PersonInput {
    id: Int
    name: String
    age: Int
  }

  type Person {
    id: Int
    name: String
    age: Int
  }

  type Query {
    allPersons: [Person]
    getPerson(id: Int): Person
    getPersonOlderThan(age: Int): [Person]
  }

  type Mutation {
    addPerson(per: PersonInput): String
    updatePerson(per: PersonInput): String
    deletePerson(id: Int): String
  }
`);

// The 'root' provides a resolver function for each API endpoint
const root = {
  allPersons: persSrv.getAllPersons,
  getPerson: persSrv.getPersonById,
  getPersonOlderThan: persSrv.getPersonByAge,
  addPerson: persSrv.addPerson,
  updatePerson: persSrv.updatePerson,
  deletePerson: persSrv.deletePerson,
};

const app = express();
const PORT = 3000;

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
