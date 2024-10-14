import NewPacks from '@/components/NewPacks';
import LiveOpens from '@/components/LiveOpens';
import HowItWorks from '@/components/HowItWorks';

export default function Home() {
  return (
    <div>
      <main className="max-w-screen-xl mx-auto m-5 flex gap-5">
        <div className="w-4/5 flex flex-col gap-10">
          <NewPacks />
          <HowItWorks />
        </div>
        <div className="w-1/5">
          <LiveOpens />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
