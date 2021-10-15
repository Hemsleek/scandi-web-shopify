import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000',
  })
})


export const fetchData =(query) => (
  client.query({
    query
  })
)

export default client