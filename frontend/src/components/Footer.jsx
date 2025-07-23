import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-center py-4 mt-8">
      <p>Made with ❤️ by <strong>Satyam Prajapati</strong></p>
      <p>
        <a href="https://www.linkedin.com/in/satyam-prajapati-2sp" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          LinkedIn
        </a> |{" "}
        <a href="https://github.com/Satyam-prajapati-eng" target="_blank" rel="noopener noreferrer" className="text-gray-800 underline">
          GitHub
        </a> |{" "}
        <a href="mailto:satyasatyam722@gmail.com" className="text-red-600 underline">
          Email
        </a>
      </p>
    </footer>
  );
}
