import NewPacks from '@/components/NewPacks';
import LiveOpens from '@/components/LiveOpens';
import HowItWorks from '@/components/HowItWorks';

export default function Home() {
  return (
    <main className="flex gap-5">
      <div className="w-4/5 flex flex-col gap-10">
        <NewPacks />
        <HowItWorks />
      </div>
      <div className="w-1/5">
        <LiveOpens />
      </div>
    </main>
  );
}
