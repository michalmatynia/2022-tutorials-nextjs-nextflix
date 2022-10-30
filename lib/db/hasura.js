export async function queryHesuraGraphQL(
  operationsDoc,
  operationName,
  variables
) {
  const result = await fetch(process.env.NEXT_PUBLIC_HESURA_ADMIN_URL, {
    method: "POST",
    headers: {
    //   "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HESURA_ADMIN_SECRET,
    "Authorization": "Bearer"
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables,
      operationName,
    }),
  });

  return await result.json();
}

function fetchMyQuery() {
  const operationsDoc = `
    query MyQuery {
      users {
        id
        email
      }
    }
  `;
  return queryHesuraGraphQL(operationsDoc, "MyQuery", {});
}
