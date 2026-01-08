import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_qheeaof",
        "template_qjd8gtl",
        formRef.current,
        "o_PaAzMlIAa-2D7Ir"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        formRef.current.reset();
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to send message ❌");
        setLoading(false);
      });
  };

  return (
    <section className="relative w-full  flex justify-center items-center  overflow-hidden mt-[10%] md:mt-[5%]">
      <div className="absolute  opacity-30">
        <img
          src="/assets/circle.svg"
          alt="grid"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-[80%] max-w-[1200px] rounded-[32px]">
        <div
          className="relative backdrop-blur-xl 
            rounded-[32px] animated-border 
          px-6 md:px-16 py-14 "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[20px] md:text-[32px] text-nowrap font-hagrid text-primary mb-2">
                Hire me! for your Project
              </h2>

              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="mt-10 space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className=" w-full">
                    <label className=" block mb-1 text-white font-aileron text-[15px] font-semibold">
                      Your Good Name:
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      className=" rounded-md border border-primary outline-none px-4 py-2 w-full bg-black"
                      required
                    />
                  </div>
                  <div className=" w-full">
                    <label className=" block mb-1 text-white font-aileron text-[15px] font-semibold">
                      Your Last Name:
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      className=" rounded-md border border-primary outline-none px-4 py-2 bg-black w-full"
                      required
                    />
                  </div>
                  <div className=" w-full">
                    <label className=" block mb-1 text-white font-aileron text-[15px] font-semibold">
                      Your Email Id:
                    </label>
                    <input
                      type="email"
                      name="email"
                      className=" rounded-md border border-primary outline-none px-4 py-2 bg-black w-full"
                      required
                    />
                  </div>

                  <div className=" w-full">
                    <label className=" block mb-1 text-white font-aileron text-[15px] font-semibold">
                      Your Phone Number:
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className=" rounded-md border border-primary outline-none px-4 py-2 w-full bg-black"
                    />
                  </div>
                </div>

                <div className=" w-full">
                  <label className=" block mb-1  font-aileron text-[15px] font-semibold  text-white">
                    Your Message:
                  </label>
                  <textarea
                    name="message"
                    required
                    className=" rounded-md border border-primary outline-none px-4 py-10 w-full bg-black"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-10 py-3 rounded-full
                  font-aileron
                    bg-primary  text-white  font-semibold
                    hover:scale-105 transition disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            <div className="flex justify-center">
              <img
                src="/assets/computer.svg"
                alt="illustration"
                className="w-[260px] md:w-[340px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
