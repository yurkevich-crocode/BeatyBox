export const dynamic = "force-dynamic"; // defaults to force-static

export async function POST(request) {
  if (request.method === "POST") {
    const requestData = await request.json();

    try {
      const response = await fetch(
        `http://servicesserver.onrender.com/api/company/${requestData.id}`,
        {
          method: "GET",
          cache: "no-store",
        }
      );

      if (!response.ok) {
        return Response.json({ data: [] });
      }
      const result = await response.json();

      return Response.json({ data: result });
    } catch (error) {
      return Response.json({ error: "Error fetching data" });
    }
  } else {
    request.status(405).end();
  }
}
