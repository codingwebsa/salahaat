// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Client from "@/services/apollo";
import { gql } from "@apollo/client";

export default async function handler(req, res) {
  const BooksQuery = gql`
    query BooksQuery {
      books {
        data {
          attributes {
            name
            imgurl
            description
            price
            discountprice
            authors {
              data {
                attributes {
                  name
                  slug
                }
              }
            }
            categories {
              data {
                attributes {
                  name
                  slug
                }
              }
            }
          }
        }
      }
    }
  `;

  const { data } = await Client.query({
    query: BooksQuery,
  });

  res.status(200).json(data);
}
