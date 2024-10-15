import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PackService from '@/services/PackService';
import ButtonBar from '@/components/ButtonBar';

export default function PackPage() {
  const router = useRouter();
  const { id } = router.query;
  const [pack, setPack] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchPackData = async (packId: string) => {
    setLoading(true);
    try {
      const pack = await PackService.getPackById(packId);
      console.log(pack);
      setPack(pack);
    } catch (error) {
      console.error('Error fetching pack data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id && typeof id === 'string') {
      fetchPackData(id);
    }
  }, [id]);

  if (loading) {
    return (
      <div>
        Loading...
        <h2>WHASHDSADAD</h2>
      </div>
    );
  }
  // if (!pack) return <div>Pack not found</div>;

  return (
    <div className="max-w-screen-xl mx-auto">
      <ButtonBar pack={pack} />

      <div className="flex flex-col gap-5 my-10">
        <h1 className="text-lg font-bold">
          {pack?.name} - ${pack?.price}
        </h1>

        <div className="flex flex-wrap gap-5">
          {pack?.items.map((item: any) => (
            <div key={item.id} className="flex flex-col gap-2">
              <p>{item.rarity}</p>
              <img src={item.image} alt={item.name} className="w-20 h-20" />
              <h3 className="text-sm font-bold truncate">{item.name}</h3>
              <p className="text-sm text-zinc-400">${item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
