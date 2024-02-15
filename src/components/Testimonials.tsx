import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

// import positive from '../assets/png/icons8-positive-64.png'
import empowering from '../assets/png/icons8-knowledge-50.png'
import network from '../assets/png/icons8-blockchain-technology-64.png'
import coporate from '../assets/png/icons8-corporate-100 (1).png'
import handshake from '../assets/png/icons8-deal-64.png'

interface TestimonialProps {
  image: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: handshake,
    userName: '2',
    comment: "  POSITIVE brand visibility: Providing support to a   student project which is working towards an initiative of sustainable engineering will add a positive outlook to your brand.",
  },
  {
    image: network,
    userName: "2",
    comment:
      "   NETWORK: Your company will be promoted nationally and globally through our social media and promotional events organised in our college.",
  },

  {
    image: empowering,
    userName: "3",
    comment:
      "  EMPOWERING YOUTH: Team helps foster technological advancements among students of engineering fraternity of india by providing them with an opportunity to gain knowledge and hands on experience. ",
  },
  {
    image: coporate,
    userName: "3",
    comment:
      "CORPORATE SOCIAL responsibility: Associating with TEAM CFR also covers your company's required C.S.R activities.",
  },

];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Partner With Us{" "}
        </span>
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">

      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
