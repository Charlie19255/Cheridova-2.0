import React from "react";
import { NavLink } from "react-router-dom";
import woman1 from "../../../assets/photos/woman1.jpg";
import manne2 from "../../../assets/photos/manne2.jpg";
import { motion } from "framer-motion/dist/framer-motion";

const Home = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 justify-items-center gap-1 w-full h-screen">
        <div className="bg-black/30 fixed w-full h-full" />

        {/* left image */}
        <div>
          <img
            alt="woman1"
            className="w-full h-full object-cover"
            src={woman1}
          />
        </div>

        {/* right image */}
        <div>
          <img
            alt="manne"
            className="w-full h-full object-cover saturate-50"
            src={manne2}
          />
        </div>

        {/* text */}
        <div className="absolute flex flex-col md:top-[35%] font-garamond justify-center text-center">
          {/* user logged in */}
          {logged_in && (
            <p className="text-8xl font-bold text-coral">Welcome back!</p>
          )}
          {logged_in && (
            <p className="text-2xl text-white">
              Ready to make your day way more flashy?
            </p>
          )}

          {/* user not logged in  */}
          <motion.div
            className="md:w-2/5 mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {!logged_in && (
              <p className="font-bold text-8xl text-coral">Welcome.</p>
            )}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {!logged_in && (
              <p className="text-2xl text-white">
                Chéridova is your one-stop shop to upgrading your wardrobe.
                Inspirations to many occasions we face in our day to day lives.
              </p>
            )}
            <div className="flex justify-center items-center gap-4">
              {!logged_in && (
                <button className="bg-green hover:bg-gray text-white font-bold font-garamond py-2 px-4 border-b-4 border-green hover:border-gray rounded">
                  <a href={sign_in_route} className="nav-link">
                    Sign In
                  </a>
                </button>
              )}
              {!logged_in && (
                <button className="bg-green hover:bg-gray text-white font-bold font-garamond py-2 px-4 border-b-4 border-green hover:border-gray rounded">
                  <a href={new_user_route} className="nav-link">
                    Sign Up
                  </a>
                </button>
              )}
              <NavLink to="/Categories" className="nav-link">
                <button className="bg-green hover:bg-gray text-white font-bold font-garamond py-2 px-4 border-b-4 border-green hover:border-gray rounded">
                  View Categories
                </button>
              </NavLink>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default Home;
