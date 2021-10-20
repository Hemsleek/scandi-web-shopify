import { client} from '@tilework/opus';

const graphqlEndpoint = process.env.REACT_APP_GRAPHQL_ENDPOINT

 client.setEndpoint(graphqlEndpoint)


 
 export default client

