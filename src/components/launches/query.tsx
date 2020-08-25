import gql from "graphql-tag";

export const launches = gql`
  query launches($order: Order!, $sort: String!, $limit: Int, $offset: Int) {
    launches(order: $order, sort: $sort, limit: $limit, offset: $offset) {
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
        flickr_images
      }
    }
  }
`;
