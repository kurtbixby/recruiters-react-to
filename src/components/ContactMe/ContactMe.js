import { useState } from "react";

const ContactMe = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    window.location.href = `mailto:kurtbixby@gmail.com?body=${message}`;
  };

  const [message, setMessage] = useState("");

  return (
    <div>
      <h1 className="text-3xl">Contact Me</h1>
      <form class="m-2 space-y-2" onSubmit={handleFormSubmit}>
        <div>
          <label
            for="Message"
            className="block mb-2 text-md font-medium text-black dark:text-black"
          >
            Message
          </label>
          <input
            type="textarea"
            id="email"
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Message..."
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center mb-4">
          <button
            type="submit"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
