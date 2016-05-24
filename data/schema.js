const typeDefinitions = `
type Query {
  testString: String
  aUser: User
}

type User {
  id: ID!
  credentials: Credentials
}

type EmailAccount {
  typename: String!
  email: String!
  password: String!
}

type GitHubAccount {
  typename: String!
  handle: String!
  token: ID!
}

union Credentials = EmailAccount | GitHubAccount

schema {
  query: Query
}
`;

export default [typeDefinitions];
