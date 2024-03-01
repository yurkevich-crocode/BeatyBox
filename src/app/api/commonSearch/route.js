export const dynamic = "force-dynamic"; // defaults to force-static

export async function POST(request) {
  if (request.method === "POST") {
    try {
      const response = await fetch(
        "https://servicesserver.onrender.com/api/common/search",
        {
          method: "GET",
          cache: "no-store",
        }
      );

      if (!response.ok) {
        return Response.json({ error: "Произошла ошибка, попробуйте позже!" });
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
