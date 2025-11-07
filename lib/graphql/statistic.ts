import { gql } from "@apollo/client";

export default {
  Queries: {
    getStatistics: gql`
      query GetStatistics {
        statistics {
          id
          title
          info
        }
      }
    `,
  },
};
