// src/app/layout.js
import Navbar from '../components/Navbar/page';
import './globals.css'; // Ensure this path is correct

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
