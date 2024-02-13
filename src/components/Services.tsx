import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

import manufacturing from '../assets/png/manufacturing.png'
import finance from '../assets/png/icons8-finances-48.png'
import logistic from '../assets/png/icons8-logistics-80.png'
import Material from '../assets/png/icons8-metal-96.png'
import activities from '../assets/png/icons8-activities-64.png'


interface ServiceProps {
  title: string;
  description: string;
  icon: string
}

const serviceList: ServiceProps[] = [
  {
    title: "Financial Support",
    description:
      "Support by contributing financially",
    icon: finance ,
  },
  {
    title: "Manufacturing",
    description:
      "Provide us with machines needed for the manufacturing of special parts",
    icon: manufacturing,
  },
  {
    title: "Logistics",
    description:
      "Aid us by shipping our cars within the country and globally for compititions",
    icon: logistic,
  },
  {
    title: "Material",
    description:
      "Provide is wuth tools or raw matrial needed for the manufacturing of special parts",
    icon: Material,
  }, {
    title: "CSR Activities",
    description:
      "Asssociating with us covers your company's required C.S.R. activities",
    icon: activities,
  },
];

export const Services = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold my-10">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              How to{" "}
            </span>
            Support Us
          </h2>

          {/* <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            dolor.
          </p> */}

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl w-16">
                   <img src={icon} alt="title" />
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* <img
          src={race2}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        /> */}
      </div>
    </section>
  );
};
