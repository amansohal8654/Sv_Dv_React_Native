import { gql } from "@apollo/client";

export const GET_CUSTOMERS = gql`
  query GetCustomers {
    getCustomer {
      value {
        email
        name
      }
      name
    }
  }
`;

export const GET_ORDERS = gql`
  query GetOrders {
    getOrder {
      value {
        Address
        City
        Lat
        Lng
        carrier
        shippingCost
        trackingId
        trackingItems {
          customer {
            email
            name
          }
          customer_id
          items {
            item_id
            name
            price
            quantity
          }
        }
      }
    }
  }
`;
