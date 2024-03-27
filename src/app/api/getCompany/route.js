export const dynamic = "force-dynamic"; // defaults to force-static

export async function POST(request) {
  if (request.method === "POST") {
    const requestData = await request.json();

    try {
      const response = await fetch(
        `https://yoohive-api-test-version.onrender.com/api/company/${requestData.id}`,
        {
          method: "GET",
          cache: "no-store",
        }
      );

      const result = await response.json();

      return Response.json({ data: result });
    } catch (error) {
      console.log(Response);
      return Response.json({ error: "Error fetching data" });
    }
  } else {
    request.status(405).end();
  }
}
