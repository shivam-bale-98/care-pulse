import AppointmentForm from "@/components/forms/AppointmentForm";
import PatientForm from "@/components/forms/PatientForm";
import { getPatient } from "@/lib/actions/patients.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewAppointment = async ({params : {userId}} : SearchParamProps) => {

  const patient = await getPatient(userId);


  return (
    <div className="flex h-screen max-h-screen">
      {/* { otp verification } */}
      <section className="remove-scrollbar container my-auto w-[70%]">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="care pulse"
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm type="create" userId={userId}  patientId={patient.$id}/>

          <p className="copyright mt-10 py-12">
            @carepulse copyright
          </p>
        </div>
      </section>

      <section className="min-w-[18rem] w-[30%]  rounded-3xl overflow-hidden relative">
        <Image
          src="/assets/images/appointment-img.png"
          alt="Appointments"
          fill
          className="absolute inset-0 size-full object-cover"
        />
      </section>
    </div>
  );
};

export default NewAppointment;
