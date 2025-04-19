import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const renderContent = () => {
    switch (page) {
      case "home":
        return (
          <div className='content'>
            <h1>Welcome to Our School</h1>
            <p>Providing quality education and a nurturing environment.</p>
          </div>
        );
      case "about":
        return (
          <div className='content'>
            <h1>About Us</h1>
            <p>
              Our school has a rich history of academic excellence and community
              involvement.
            </p>
          </div>
        );
      case "contact":
        return (
          <div className='content'>
            <h1>Contact Us</h1>
            <p>Email: info@ourschool.edu</p>
            <p>Phone: +123 456 7890</p>
            <iframe
              title='n8n Chatbot'
              src='https://ianyian.app.n8n.cloud/webhook/99021e28-caeb-440d-880f-d600c8e37bed/chat'
              style={{
                width: "100%",
                height: "400px",
                border: "none",
                marginTop: "1rem",
              }}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='App'>
      <header>
        <nav>
          <ul>
            <li>
              <button
                onClick={() => setPage("home")}
                className={page === "home" ? "active" : ""}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => setPage("about")}
                className={page === "about" ? "active" : ""}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => setPage("contact")}
                className={page === "contact" ? "active" : ""}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>{renderContent()}</main>
      <footer>
        <p>© 2025 Our School. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
