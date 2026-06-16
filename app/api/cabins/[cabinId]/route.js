import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const pageParams = await params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(pageParams.cabinId),
      getBookedDatesByCabinId(pageParams.cabinId),
    ]);
    return Response.json({ cabin, bookedDates });
  } catch (err) {
    return Response.json({ message: "cabin could not be found" });
  }
}
