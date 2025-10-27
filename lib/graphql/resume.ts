import { gql } from "@apollo/client";

export default {
  Queries: {
    getExperience: gql`
      query GetExperience {
        resumes {
          id
          badge
          description
          isExperience
          logo {
            url
          }
          subTitle
          title
        }
      }
    `,

    getSkills: gql`
      query GetSkills {
        skills {
          id
          knowledge
          coding {
            field
            id
            value
          }
          development {
            field
            id
            value
          }
          languages {
            field
            id
            value
          }
        }
      }
    `,
  },
};
