import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Success = async ({
  params: { userId },
  searchParams,
}: SearchParamProps) => {
  const appointmentId = (searchParams?.appointmentId as string) || "";

  const appointment = await getAppointment(appointmentId);

  const doctor = Doctors.find(
    (doc) => doc.name === appointment.primaryPhysician
  );

  return (
    <section className="md:h-screen md:max-h-screen flex flex-col  px-[5%] items-center py-14 ">
      <div className="mx-auto md:pb-28 pb-10">
        <Link href="/">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="carepulse"
            height={1000}
            width={1000}
            className="h-10 w-fit"
          />
        </Link>
      </div>

      <div className="flex w-full  flex-col items-center mb-10">
        <Image
          src="/assets/gifs/success.gif"
          height={300}
          width={280}
          alt="success"
        />

        <h2 className="header mb-6 max-w-[37.5rem] text-center">
          Your <span className="text-green-500">appointment request</span> has
          been successfully submitted!
        </h2>

        <p className="">We'll be in touch shortly to confirm.</p>
      </div>

      <div className="request-details ">
        <p>Requested appointment details:</p>

        <div className="flex items-center gap-3 p-3 border border-white/10 rounded-[10px] overflow-hidden bg-glaze-black ">
          {doctor && (
            <Image
              src={doctor?.image}
              alt={doctor?.name}
              width={50}
              height={50}
            />
          )}

          <p className="whitespace-nowrap text-sm">Dr. {doctor?.name}</p>
        </div>

        <div className="flex gap-2">
          <Image
            src="/assets/icons/calendar.svg"
            alt="date"
            height={24}
            width={24}
          />
          <p>{formatDateTime(appointment.schedule).dateTime}</p>
        </div>
      </div>

      <div className="mt-10">
        <Button variant="outline" className="shad-primary-btn" asChild>
           <Link href={`/patients/${userId}/new-appointment`}>
              New Appointment
           </Link>
        </Button>
      </div>

      <p className="copyright mt-10">@2024 carepulse copyright</p>
    </section>
  );
};

export default Success;
