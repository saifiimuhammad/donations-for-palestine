import { Mail, MessageCircle } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="w-full min-h-[70vh] py-12 px-4 sm:px-12 lg:px-22">
      <div className="max-w-xl lg:max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-roboto">
          Know a Trusted Charity?
        </h2>
        <p className="text-gray-600 mb-6 text-base sm:text-lg">
          If you know a reliable Pakistani organization helping Palestine, send
          us the link. We’ll verify and add it to our platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="https://wa.me/923243191677"
            target="_blank"
            className="flex items-center gap-2 text-white bg-green-600 hover:bg-green-700 px-5 py-3 rounded-md transition w-full sm:w-auto justify-center"
          >
            <MessageCircle size={18} /> WhatsApp Us
          </a>
          <a
            href="mailto:muhammadsaifarain786@gmail.com"
            className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-md transition w-full sm:w-auto justify-center"
          >
            <Mail size={18} /> Email Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
