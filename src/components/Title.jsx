// src/components/Header.jsx

function Title() {
  return (
    <header className="relative flex h-screen w-full items-center justify-center">
      <div className="text-center text-[var(--color-text)]">
        <h1 className="caramel-regular text-[35vh]">Dynamics</h1>
      </div>
      <p className="absolute bottom-0 left-1/2 mb-8 -translate-x-1/2 transform text-center">
        Welcome to our platform - where innovation meets excellence.
      </p>
    </header>
  );
}

export default Title;
