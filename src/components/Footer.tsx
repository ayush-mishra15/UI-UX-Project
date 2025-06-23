function Footer() {
  return (
    <div className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-6 md:px-7 lg:px-8">
        
        {/* Intro Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Start Your Coding Journey</h3>
          <p>
            We provide hands-on web development courses designed to take you from beginner to pro. Learn HTML, CSS, JavaScript, React, and more with real-world projects and expert guidance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/courses" className="hover:underline">Courses</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="space-x-4">
            <a href="#" className="hover:underline">LinkedIn</a>
            <a href="#" className="hover:underline">GitHub</a>
            <a href="#" className="hover:underline">YouTube</a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <p>Sector 62, Noida, India</p>
          <p>PIN: 201301</p>
          <p>Email: <a href="mailto:support@webschool.com" className="hover:underline">support@webschool.com</a></p>
          <p>Phone: +91 9755894081 </p>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        © 2020 Web School. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
