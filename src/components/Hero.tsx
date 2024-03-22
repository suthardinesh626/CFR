
import Carmodel from '../assets/Car-modal.png'

export const Hero = () => {
  return (
    <section id='hero' className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6 ">
        <main className="xl:text-6xl md:text-4xl  font-bold max-sm:text-2xl lg:text-4xl text-start">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]   to-[#D247BF] text-transparent bg-clip-text ">
              #RATTLE.RUMBLE.ROAR
            </span>{" "}
            CRCE FORMULA
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text ">
            RACING ELECTRIC!
            </span>{" "}
            
          </h2>
        </main>

       

        {/* <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Get Started</Button>

          <a
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div> */}
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        {/* <HeroCards /> */}
        <img src={Carmodel} alt="" />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
