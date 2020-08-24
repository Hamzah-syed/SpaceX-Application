import gql from "graphql-tag";

export const comapnyInfo = gql`
  query companyInfo {
    info {
      summary
    }
  }
`;

export const missionNames = gql`
  query missionNames {
    missions {
      mission_name
      mission_id
    }
  }
`;

export const missionDetails = gql`
  query missiondetails($id: String!) {
    mission(id: $id) {
      mission_name
      twitter
      website
      wikipedia
      description
    }
  }
`;
export const rockets = gql`
  query rockets {
    rockets {
      id
      rocket_name
      description
      wikipedia
      flickr_images
    }
  }
`;
