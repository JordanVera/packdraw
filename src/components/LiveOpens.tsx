import { usePacks } from '@/providers/PackProvider';
import { Play, Pause } from 'lucide-react';

const LiveOpens = () => {
  const { allPacks } = usePacks();

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold">Live Opens</h2>
        <button className="text-sm font-semibold p-2 rounded-full bg-blue-600">
          <Play fill="white" />
        </button>
      </div>
    </div>
  );
};

export default LiveOpens;
