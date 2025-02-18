// src/components/Header.jsx

function Header() {
  return (
    <header className="h-screen w-full">
      <div className="absolute bottom-0 left-0 p-9 text-[var(--color-text)]">
        <h1 className="text-5xl font-bold">Dynamics</h1>
        <p className="mt-2 text-xl">
          Welcome to our platform - where innovation meets excellence.
        </p>
      </div>
    </header>
  );
}

export default Header;
