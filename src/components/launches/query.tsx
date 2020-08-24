import gql from "graphql-tag";

export const launches = gql`
  query launches {
    launches {
      mission_id
      mission_name
      details
      launch_site {
        site_name
      }
      launch_success

      launch_date_local

      links {
        video_link
        article_link
        wikipedia
      }
    }
  }
`;
