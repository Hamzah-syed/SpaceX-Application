import gql from "graphql-tag";

export const History = gql`
  query HistoryData($limit: Int!, $sort: String!, $order: Order!) {
    history(limit: $limit, sort: $sort, order: $order) {
      title
      details
      links {
        article
      }
      event_date_utc
    }
  }
`;
