import { Link } from "@/i18n/routing";
import Form from "./Form";
import {
  LucideBriefcaseBusiness,
  ThumbsUp,
  TimerResetIcon,
} from "lucide-react";
import { Button } from "../ui/button";

function ContactFormSection() {
  return (
    <section className="mt-36  con grid md:grid-cols-2 grid-cols-1 items-center gap-16">
      <Form />
      <div>
        <h2>
          Ready to Make Your Move With{" "}
          <Link
            href={"/about-us"}
            className="underline-offset-2 underline text-primary"
          >
            Professional Movers ?
          </Link>
        </h2>
        <p className="md:text-xl text-lg mt-4">
          Get in touch with us today for a no-obligation quote and discover how
          we can make your relocation seamless and stress-free!
        </p>
        <ul className="mt-5">
          <li className="flex gap-x-4 my-3 font-bold text-lg">
            <ThumbsUp className="text-primary" /> Cheap Prices
          </li>
          <li className="flex gap-x-4 my-3 font-bold text-lg">
            <TimerResetIcon className="text-primary" /> Quick Response
          </li>
          <li className="flex gap-x-4 my-3 font-bold text-lg">
            <LucideBriefcaseBusiness className="text-primary" /> Modern
            Equipments
          </li>
        </ul>

        <Button size={"lg"} className="md:w-96 bg-grayish mt-5">
          <Link className="" href={"/about-us"}>
            More About Us{" "}
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default ContactFormSection;
