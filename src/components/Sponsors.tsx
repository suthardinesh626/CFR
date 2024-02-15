
import sponsor1 from '../assets/Sponsers/ABHIJEET-LOGO-modified.png'
import sponsor2 from '../assets/Sponsers/BKT.png'
import sponsor3 from '../assets/Sponsers/Everest.jpg'
import sponsor4 from '../assets/Sponsers/Evon.jpg'
import sponsor5 from '../assets/Sponsers/HALONIX.jpg'
import sponsor6 from '../assets/Sponsers/JK FIBREGLASS.png'
import sponsor7 from '../assets/Sponsers/JLCPCB.jpeg'
import sponsor8 from '../assets/Sponsers/maine-container.jpg'
import sponsor9 from '../assets/Sponsers/MM treatment.jpg'
import sponsor10 from '../assets/Sponsers/MetalForm.jpg'
import sponsor11 from '../assets/Sponsers/PANKAJ POTENTIOMETERS.jpeg'
import sponsor12 from '../assets/Sponsers/PBW.jpeg'
import sponsor13 from '../assets/Sponsers/Prodigy Kustoms.jpeg'
import sponsor14 from '../assets/Sponsers/RAMANI STEEL HOUSE.jpeg'
import sponsor15 from '../assets/Sponsers/TE.png'
import sponsor16 from '../assets/Sponsers/Triaro.jpg'
import sponsor17 from '../assets/Sponsers/autoforms.jpg'
import sponsor18 from '../assets/Sponsers/fibrochem.png'


interface SponsorProps {
  name: string;
  image: string;
}

const sponsors: SponsorProps[] = [
 {
    name: "Abhjeet",
    image: sponsor1,
  },
  {
    name: "BKT",
    image: sponsor2,
  },
  {
    name: "Everest",
    image: sponsor3,
  },
  {
    name: "Even Energy",
    image: sponsor4,
  },
  {
    name: "Halonix",
    image: sponsor5,
  },
  {
    name: "J.K. Fibre Glass Work",
    image: sponsor6,
  },
  {
    name: "JLCPCB",
    image: sponsor7,
  }, {
    name: "Marine Containers",
    image: sponsor8,
  }, {
    name: "M M Vaccumtreat",
    image: sponsor9,
  }, {
    name: "Metal Form",
    image: sponsor10,
  }, {
    name: "Pankaj",
    image: sponsor11,
  }, {
    name: "Prodigy Kustoms",
    image: sponsor13,
  }, {
    name: "Ramani Steel House",
    image: sponsor14,
  }, {
    name: "TE Conectivity",
    image: sponsor15,
  }, {
    name: "TRIARO",
    image: sponsor16,
  }, {
    name: "autoforms",
    image: sponsor17,
  },
  {
    name: "fiber chem industries",
    image: sponsor18,
  },
];

export const Sponsors = () => {

  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary underline">
        TITLE-SPONSORS
      </h2>

      <div className="flex flex-wrap justify-center items-center my-12">

        <div
          className="flex flex-col items-center gap-1 text-muted-foreground/60"
        >
          <img src={sponsor12} className="w-60 rounded-lg" />
          <h3 className="text-xl  font-bold text-white">Patel Brass Works</h3>
        </div>

      </div>



      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary underline">
        SPONSORS
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ name, image }: SponsorProps) => (
          <div
            key={name}
            className="flex flex-col items-center gap-1 text-muted-foreground/60"
          >
            <img src={image} alt={name} className="w-32" />
            <h3 className="text-xl text-white font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
