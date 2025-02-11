import { Link } from "@/i18n/routing";
import { Button } from "../ui/button";

interface FeaturesProps {
  title: string;
  desc: string;
  items: Array<{ heading: string; icon: React.ReactNode }>;
  contactBtn: string;
}

const Features = ({ desc, items, title, contactBtn }: FeaturesProps) => {
  return (
    <section className="mt-40 con grid md:grid-cols-2 grid-cols-1 gap-10 items-center ">
      <div>
        <h2 className="mb-5">{title}</h2>
        <p className="md:text-xl text-lg">{desc}</p>
        <Link aria-label={contactBtn} href={"/contact"}>
          <Button className="mt-5 md:w-80">{contactBtn}</Button>
        </Link>
      </div>
      <ul className="grid grid-cols-2 gap-5 md:px-0 px-5">
        {items.map((item, index) => (
          <li
            className="bg-white flex items-center flex-col justify-center gap-y-2 md:p-5 p-3 rounded-xl"
            key={index}
          >
            {item.icon}
            <p className="md:text-lg text-base/5 text-center font-bold">
              {" "}
              {item.heading}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Features;
