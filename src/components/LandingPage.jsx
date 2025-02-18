// src/components/LandingPage.jsx

import Header from "../components/Header";
import CardDisplay from "../components/CardDisplay";

function LandingPage() {
  return (
    <div className="min-h-screen text-[var(--color-text)]">
      <Header />
      <section className="py-12">
        <div className="container mx-auto px-4">
          <CardDisplay />
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
