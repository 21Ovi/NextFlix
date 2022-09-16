// export async function createNewUser(token, metadata) {
//   const operationsDoc = `
//   mutation createNewUser($issuer: String!, $email: String!, $publicAddress: String!) {
//     insert_users(objects: {email: $email, issuer: $issuer, publicAddress: $publicAddress}) {
//       returning {
//         email
//         id
//         issuer
//       }
//     }
//   }
// `;

//   const { issuer, email, publicAddress } = metadata;
//   const response = await queryHasuraGQL(
//     operationsDoc,
//     "createNewUser",
//     {
//       issuer,
//       email,
//       publicAddress,
//     },
//     token
//   );
//   console.log({ response, issuer });
//   return response;
// }

// export async function isNewUser(token, issuer) {
//   const operationsDoc = `
//   query isNewUser($issuer: String!) {
//     users(where: {issuer: {_eq: $issuer}}) {
//       id
//       email
//       issuer
//     }
//   }
// `;

//   const response = await queryHasuraGQL(
//     operationsDoc,
//     "isNewUser",
//     {
//       issuer,
//     },
//     token
//   );
//   console.log({ response, issuer });
//   return response?.data?.users?.length === 0;
// }

// async function queryHasuraGQL(operationsDoc, operationName, variables, token) {
//   const result = await fetch(process.env.NEXT_PUBLIC_HASURA_ADMIN_URL, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//       query: operationsDoc,
//       variables: variables,
//       operationName: operationName,
//     }),
//   });

//   return await result.json();
// }

export async function queryHasuraGQL(operationsDoc, operationName, variables) {
  const result = await fetch(process.env.NEXT_PUBLIC_HASURA_ADMIN_URL, {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiT3Zlc2giLCJpYXQiOjE2NjMzNjA3NDksImV4cCI6MTY2Mzk2NTU3MiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiLCJtb2QiXSwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoidXNlciIsIngtaGFzdXJhLXVzZXItaWQiOiJub3Rhbmt5In19.lGJPn7b1k8E7Y6hX041z-JC7iUGlZrDQecfAXF4WIaU",
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });

  return await result.json();
}

function fetchMyQuery() {
  const operationsDoc = `
  query MyQuery {
    users {
      email
      id
      issuer
      publicAddress
    }
  }
`;
  return queryHasuraGQL(operationsDoc, "MyQuery", {});
}

export async function startFetchMyQuery() {
  const { errors, data } = await fetchMyQuery();

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}
