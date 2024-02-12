import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          {/* <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          /> */}
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text mx-1">
                  About Our:{" "}
                </span>
                Racing & Development
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                CRCE Formula Racing Electric is a formula student team of Fr. Conceicao Rodrigues College of
                Engineering
                based in Bandra, Mumbai. We are bound together by our shared passion for automobiles, motorsports
                and our
                competitive spirits. As budding engineers our sole purpose is to build and learn as we advance
                ahead. Honing
                theoretical knowledge and applying it practically, our team members have gained practical knowledge
                and
                developed critical thinking, every member of Team CFR also gains excellent knowledge of team
                building,
                overcoming collaborative challenges and at the same time have a strong grasp on time management and
                leadership roles. We believe true growth takes place only outside of your comfort zone and as we
                know rolling
                stones gather no moss. Keeping that philosophy in mind and hustling towards it every day, TEAM CFR
                has taken
                the next leap in its story by permanently shifting towards building full fledged electric race cars.

              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
