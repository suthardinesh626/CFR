import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Dhruv from '../assets/Team/CoreTeam/1.png'
import johnathan from '../assets/Team/CoreTeam/2.png'
import jason from '../assets/Team/CoreTeam/3.png'
import mahthew from '../assets/Team/Chassis/Chassis/1.png'
import mayank from '../assets/Team/Chassis/Chassis/3.png'
import krsish from '../assets/Team/Chassis/Chassis/4.png'
import rudra from '../assets/Team/Chassis/Chassis/5.png'

import shahood from '../assets/Team/Electronics/Electronics/2.png'
import malcom from '../assets/Team/Electronics/Electronics/3.png'
import smruti from '../assets/Team/Electronics/Electronics/4.png'
import jacob from '../assets/Team/Electronics/Electronics/5.png'


import mahender from '../assets/Team/E-powertrain/1.png'
import yash from '../assets/Team/E-powertrain/2.png'
import shantanu from '../assets/Team/E-powertrain/5.png'
import anushka from '../assets/Team/E-powertrain/6.png'
import vedika from '../assets/Team/E-powertrain/7.png'
import vinay from '../assets/Team/E-powertrain/8.png'
import yashraj from '../assets/Team/E-powertrain/9.png'

import amish from '../assets/Team/Vehicle Dynamics/Vehicle Dynamics/1.png'
import kunal from '../assets/Team/Vehicle Dynamics/Vehicle Dynamics/2.png'
import fahad from '../assets/Team/Vehicle Dynamics/Vehicle Dynamics/3.png'
import ishan from '../assets/Team/Vehicle Dynamics/Vehicle Dynamics/4.png'
import musavir from '../assets/Team/Vehicle Dynamics/Vehicle Dynamics/5.png'
import harishankar from '../assets/Team/Vehicle Dynamics/Vehicle Dynamics/6.png'
import chinmay from '../assets/Team/Vehicle Dynamics/Vehicle Dynamics/7.png'
import pranav from '../assets/Team/Vehicle Dynamics/Vehicle Dynamics/8.png'
import shweta from '../assets/Team/Vehicle Dynamics/Vehicle Dynamics/9.jpg'


interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList1: TeamProps[] = [
  {
    imageUrl: Dhruv,
    name: "Dhruv Pednekar",
    position: "Team Captain ",
    socialNetworks: [
      { name: "Linkedin", url: "" },
      {
        name: "Facebook",
        url: "",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/dhruvpednekar?igsh=MXE3bTNna3FrOGl1Yg==",
      },
    ],
  },
  {
    imageUrl: johnathan,
    name: "Jonhathan Joseph",
    position: "Team Manager",
    socialNetworks: [
      { name: "Linkedin", url: "" },
      {
        name: "Facebook",
        url: "",
      },
      {
        name: "Instagram",
        url: "",
      },
    ],
  },
  {
    imageUrl: jason,
    name: "Jason Rodrigues",
    position: "Team Chief Financial Officer",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/jasonrod_7?igsh=MWs2OHdoZmtoa3ljeg==",
      },
    ],
  }
];
const teamList2: TeamProps[] = [
  {
    imageUrl: mahthew,
    name: "Mathew Payapilly",
    position: "Chassis Head",
    socialNetworks: [
      { name: "Linkedin", url: "" },
      {
        name: "Facebook",
        url: "",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/mat_0602?igsh=em01MTYxc3Y3Nmlm",
      },
    ],
  },
  {
    imageUrl: mayank,
    name: "Mayank Katkar",
    position: "Chassis Junior",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: krsish,
    name: "Krish Karelia",
    position: "Chassis Junior",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: rudra,
    name: "Rudra Mhatre",
    position: "Chassis Junior",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  }
];
const teamList3: TeamProps[] = [
  {
    imageUrl: Dhruv,
    name: "Dhruv Pednekar",
    position: "Electronics Head",
    socialNetworks: [
      { name: "Linkedin", url: "" },
      {
        name: "Facebook",
        url: "",
      },
      {
        name: "Instagram",
        url: "",
      },
    ],
  },
  {
    imageUrl: shahood,
    name: "Shahood Ansari",
    position: "Electronics Senior",
    socialNetworks: [
      { name: "Linkedin", url: "" },
      {
        name: "Facebook",
        url: "",
      },
      {
        name: "Instagram",
        url: "",
      },
    ],
  },
  {
    imageUrl: malcom,
    name: "Malcom Pereira",
    position: "Electronics Senior",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: smruti,
    name: "Smruti Bhatkar",
    position: "Electronics Junior",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: jacob,
    name: "Jacob Perumatil",
    position: "Electronics Junior",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  }
];
const teamList4: TeamProps[] = [
  {
    imageUrl: mahender,
    name: "Mahender Choudhary",
    position: "E-Powertrain Head",
    socialNetworks: [
      { name: "Linkedin", url: "" },
      {
        name: "Facebook",
        url: "",
      },
      {
        name: "Instagram",
        url: "",
      },
    ],
  },
  {
    imageUrl: yash,
    name: "Yash More",
    position: "E-Powertrain Senior",
    socialNetworks: [
      { name: "Linkedin", url: "" },
      {
        name: "Facebook",
        url: "",
      },
      {
        name: "Instagram",
        url: "",
      },
    ],
  },
  {
    imageUrl: johnathan,
    name: "Jonathan Joseph",
    position: "E-Powertrain Senior",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: jason,
    name: "Jason Rodrigues",
    position: "E-Powertrain Senior",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: shantanu,
    name: "Shantanu Karekar",
    position: "E-Powertrain Senior",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: anushka,
    name: "Anoushka Dixit",
    position: "E-Powertrain Junior",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: vedika,
    name: "Vedika Vartak",
    position: "E-Powertrain Junior",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: vinay,
    name: "Vinay Pujari",
    position: "E-Powertrain Junior",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: yashraj,
    name: "Yashraj Pandit",
    position: "E-Powertrain Junior",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  }
];
const teamList5: TeamProps[] = [
  {
    imageUrl: amish,
    name: "Amish Nair",
    position: "Vehicle Dynamics Head",
    socialNetworks: [
      { name: "Linkedin", url: "" },
      {
        name: "Facebook",
        url: "",
      },
      {
        name: "Instagram",
        url: "",
      },
    ],
  },
  {
    imageUrl: kunal,
    name: "Kunal Kore",
    position: "Vehicle Dynamics Senior",
    socialNetworks: [
      { name: "Linkedin", url: "" },
      {
        name: "Facebook",
        url: "",
      },
      {
        name: "Instagram",
        url: "",
      },
    ],
  },
  {
    imageUrl: shweta,
    name: "Shweta Yadav",
    position: "Vehicle Dynamics Senior",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: fahad,
    name: "Fahad Qureshi",
    position: "Vehicle Dynamics Senior",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: ishan,
    name: "Ishan Chatterjee",
    position: "Vehicle Dynamics Senior",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: musavir,
    name: "Musavir",
    position: "Vehicle Dynamics Junior",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: harishankar,
    name: "Harishankar Rajam",
    position: "Vehicle Dynamics Junior",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: chinmay,
    name: "Chinmay Khadye",
    position: "Vehicle Dynamics Junior",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: pranav,
    name: "Pranav Dhole",
    position: "Vehicle Dynamics Junior",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },

];


export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <>
      <section
        id="team"
        className="container py-24 sm:py-32"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Our Dedicated{" "}
          </span>
          Crew
        </h2>

        <p className="mt-4 mb-14 text-3xl text-muted-foreground text-center font-bold">
          Core Team
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10 ">
          {teamList1.map(
            ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
              <Card
                key={name}
                className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
              >
                <CardHeader className="mt-8 flex justify-center items-center pb-2">
                  <img
                    src={imageUrl}
                    alt={`${name} ${position}`}
                    className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                  />
                  <CardTitle className="text-center">{name}</CardTitle>
                  <CardDescription className="text-primary">
                    {position}
                  </CardDescription>
                </CardHeader>

                <CardFooter>
                  {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                    <div key={name}>
                      <a
                        href={url}
                        target="_blank"
                        className={buttonVariants({
                          variant: "ghost",
                          size: "sm",
                        })}
                      >
                        <span className="sr-only">{name} icon</span>
                        {socialIcon(name)}
                      </a>
                    </div>
                  ))}
                </CardFooter>
              </Card>
            )
          )}
        </div>


      </section>

      <section
        id="team"
        className="container py-10 sm:py-32"
      >
        <p className="mt-4 mb-14 text-3xl text-muted-foreground font-bold text-center">
          Chassis Team
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10 ">
          {teamList2.map(
            ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
              <Card
                key={name}
                className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
              >
                <CardHeader className="mt-8 flex justify-center items-center pb-2">
                  <img
                    src={imageUrl}
                    alt={`${name} ${position}`}
                    className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                  />
                  <CardTitle className="text-center">{name}</CardTitle>
                  <CardDescription className="text-primary">
                    {position}
                  </CardDescription>
                </CardHeader>


                <CardFooter>
                  {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                    <div key={name}>
                      <a
                        href={url}
                        target="_blank"
                        className={buttonVariants({
                          variant: "ghost",
                          size: "sm",
                        })}
                      >
                        <span className="sr-only">{name} icon</span>
                        {socialIcon(name)}
                      </a>
                    </div>
                  ))}
                </CardFooter>
              </Card>
            )
          )}
        </div>


      </section>

      <section
        id="team"
        className="container py-10 sm:py-32"
      >
        <p className="mt-4 mb-14 text-3xl text-muted-foreground text-center font-bold">
          Electronic Team
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10 ">
          {teamList3.map(
            ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
              <Card
                key={name}
                className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
              >
                <CardHeader className="mt-8 flex justify-center items-center pb-2">
                  <img
                    src={imageUrl}
                    alt={`${name} ${position}`}
                    className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                  />
                  <CardTitle className="text-center">{name}</CardTitle>
                  <CardDescription className="text-primary">
                    {position}
                  </CardDescription>
                </CardHeader>


                <CardFooter>
                  {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                    <div key={name}>
                      <a
                        href={url}
                        target="_blank"
                        className={buttonVariants({
                          variant: "ghost",
                          size: "sm",
                        })}
                      >
                        <span className="sr-only">{name} icon</span>
                        {socialIcon(name)}
                      </a>
                    </div>
                  ))}
                </CardFooter>
              </Card>
            )
          )}
        </div>


      </section>      

      <section
        id="team"
        className="container py-10 sm:py-32"
      >
        <p className="mt-4 mb-14 text-3xl text-muted-foreground text-center font-bold ">
          E-Powertrain
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10 ">
          {teamList4.map(
            ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
              <Card
                key={name}
                className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
              >
                <CardHeader className="mt-8 flex justify-center items-center pb-2">
                  <img
                    src={imageUrl}
                    alt={`${name} ${position}`}
                    className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                  />
                  <CardTitle className="text-center">{name}</CardTitle>
                  <CardDescription className="text-primary">
                    {position}
                  </CardDescription>
                </CardHeader>


                <CardFooter>
                  {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                    <div key={name}>
                      <a
                        href={url}
                        target="_blank"
                        className={buttonVariants({
                          variant: "ghost",
                          size: "sm",
                        })}
                      >
                        <span className="sr-only">{name} icon</span>
                        {socialIcon(name)}
                      </a>
                    </div>
                  ))}
                </CardFooter>
              </Card>
            )
          )}
        </div>


      </section>

      <section
        id="team"
        className="container py-10 sm:py-32"
      >
        <p className="mt-4 mb-14 text-3xl text-muted-foreground text-center font-bold">
          Vehical Dynamics Team
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10 ">
          {teamList5.map(
            ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
              <Card
                key={name}
                className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
              >
                <CardHeader className="mt-8 flex justify-center items-center pb-2">
                  <img
                    src={imageUrl}
                    alt={`${name} ${position}`}
                    className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                  />
                  <CardTitle className="text-center">{name}</CardTitle>
                  <CardDescription className="text-primary">
                    {position}
                  </CardDescription>
                </CardHeader>


                <CardFooter>
                  {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                    <div key={name}>
                      <a
                        href={url}
                        target="_blank"
                        className={buttonVariants({
                          variant: "ghost",
                          size: "sm",
                        })}
                      >
                        <span className="sr-only">{name} icon</span>
                        {socialIcon(name)}
                      </a>
                    </div>
                  ))}
                </CardFooter>
              </Card>
            )
          )}
        </div>


      </section>
    </>
  );
};
