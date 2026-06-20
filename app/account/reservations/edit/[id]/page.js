import UpdateReservationForm from "@/app/_components/UpdateReservationForm";
import { updateReservation } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export async function generateMetadata({ params }) {
  const { id } = await params;

  return {
    title: `Edit reservation ${id}`,
  };
}

export default async function Page({ params }) {
  const { id } = await params;

  const { cabinId, numGuests, observations } = await getBooking(id);
  const { maxCapacity } = await getCabin(cabinId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{id}
      </h2>
      <UpdateReservationForm
        maxCapacity={maxCapacity}
        numGuests={numGuests}
        observations={observations}
        id={id}
      />
    </div>
  );
}
