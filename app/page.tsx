import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
       {/* { otp verification } */}
       <section className="remove-scrollbar container my-auto">
            <div className="sub-container max-w-[496px]">
               <Image 
                 src="/assets/icons/logo-full.svg"
                 alt="care pulse"
                 height={1000}
                 width={1000}
                 className="mb-12 h-10 w-fit" 
                  />

                <PatientForm />

                <div className="text-14-regular mt-20 flex justify-between">
                  <p className="justify-items-end text-dark-600 xl:text-left" >
                  @carepulse copyright
                  </p>
                  <Link href="/?admin=true" className="text-green-500">
                     Admin
                  </Link>
                </div>
            </div>  
       </section>

       <section className="w-1/2  rounded-3xl overflow-hidden relative">
       <Image 
         src="/assets/images/onboarding-img.png"
         alt="onboarding" 
          fill
          className="absolute inset-0 size-full object-cover"
         />
       </section>
    </div>
  );
}
