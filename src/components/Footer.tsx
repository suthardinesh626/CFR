import { LogoIcon } from "./Icons";
import phone from '../assets/png/icons8-phone-48.png'

import instagram from '../assets/social/icons8-instagram-96.png'
import youtube from '../assets/social/icons8-youtube-96.png'
import linkdin from '../assets/social/icons8-linkedin-96.png'
import twitter from '../assets/social/icons8-twitter-96.png'
import email from '../assets/social/icons8-gmail-96.png'


export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            href="/"
            className="font-bold text-xl flex"
          >
            <LogoIcon /> 
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow US</h3>
          <div className="flex">
            <img src={instagram} alt=""  className="w-7 h-7"/>
            <a
              href="https://www.instagram.com/teamcfr/"
              className="opacity-60 hover:opacity-100"
            >
              Instagram
            </a>
          </div>

          <div className="flex">
          <img src={twitter} alt=""  className="w-7 h-7"/>
            <a
              href="https://twitter.com/teamcfr?lang=en"
              className="opacity-60 hover:opacity-100"
            >
              Twitter
            </a>
          </div>

          <div className="flex">
          <img src={linkdin} alt=""  className="w-7 h-7"/>
            <a
              href="https://www.linkedin.com/company/teamcrceformularacing/"
              className="opacity-60 hover:opacity-100"
            >
              LinkdIn
            </a>
          </div>

          <div className="flex">
          <img src={youtube} alt=""  className="w-7 h-7"/>
            <a
              href="https://youtube.com/@CRCEFormulaRacingElectric?si=UO0_y-qV6GkFWRwq"
              className="opacity-60 hover:opacity-100"
            >
              YouTube
            </a>
          </div>
        </div>



        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About Our </h3>
          <div>
            <a
              href="#team"
              className="opacity-60 hover:opacity-100"
            >
              Team
            </a>
          </div>

          <div>
            <a
              href="#features"
              className="opacity-60 hover:opacity-100"
            >
              Cars
            </a>
          </div>

          <div>
            <a
              href="#sponsors"
              className="opacity-60 hover:opacity-100"
            >
              Sponsors
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Contacts Us</h3>
          <div className="flex flex-row">
            <div className="w-6">
              <img src={phone} alt="" />
            </div>
            <p

              className="opacity-60 hover:opacity-100"
            >             +1234567890
            </p>
          </div>

          <div className="flex flex-row w-full">
            <div className="w-6">
              <img src={email} alt="mail" />
            </div>
            <p className="opacity-60 hover:opacity-100 w-5 px-1"
            >
              {" "}
              teamcrceformularacing@gmail.com
            </p>
          </div>


        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 Formula One
          <div
            className="text-primary transition-all border-primary "
          >
            All Rights Reserved
          </div>
        </h3>
      </section>
    </footer>
  );
};
