
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import year2017 from '../assets/Cars/2017/1.jpeg';
import year2018 from '../assets/Cars/2018/1.jpeg';
import year2019 from '../assets/Cars/2019/1.jpeg';
import year2020 from '../assets/Cars/2020/1.jpg';
import year2021 from '../assets/Cars/2021/2.jpg';
import year2023 from '../assets/Cars/2023/1.jpg';

interface FeatureProps {
  title: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Year 2017",
    image: year2017,
  },
  {
    title: "Year 2018",
    image: year2018,
  },
  {
    title: "Year 2019",
    image: year2019,
  },
  {
    title: "Year 2020",
    image: year2020,
  },
  {
    title: "Year 2021",
    image: year2021,
  },
  {
    title: "Year 2023",
    image: year2023,
  },
];

// const featureList: string[] = [
//   "Dark/Light theme",
//   "Reviews",
//   "Features",
//   "Pricing",
//   "Contact form",
//   "Our team",
//   "Responsive design",
//   "Newsletter",
//   "Minimalist",
// ];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Years
        </span>
      </h2>

      {/* <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
