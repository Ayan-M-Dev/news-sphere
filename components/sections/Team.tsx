export default function Team() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Built by Dedsec Team
        </h2>
        <p className="text-muted-foreground mb-8">
          A passionate team of developers building the future of multilingual communication
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-sm text-muted-foreground">
          <div className="text-center">
            <p className="font-semibold mb-1">Ayan Masood</p>
            <p className="text-xs">Leadership, Frontend Development</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-border" />
          <div className="text-center">
            <p className="font-semibold mb-1">Biproraj Das</p>
            <p className="text-xs">Idea, Architect & UI/UX Development</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-border" />
          <div className="text-center">
            <p className="font-semibold mb-1">Mohammed Saad Vuppukar</p>
            <p className="text-xs">Backend Development, AI Processing</p>
          </div>
        </div>
      </div>
    </section>
  );
}

