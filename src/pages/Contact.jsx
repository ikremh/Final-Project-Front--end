export default function Contact() {
  return (
    <div className="max-w-md mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="border p-2 rounded"/>
        <input type="email" placeholder="Your Email" className="border p-2 rounded"/>
        <textarea placeholder="Your Message" className="border p-2 rounded"></textarea>
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Send</button>
      </form>
    </div>
  );
}
