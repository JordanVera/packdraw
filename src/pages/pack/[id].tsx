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

  if (loading)
    return (
      <div>
        Loading...
        <h2>WHASHDSADAD</h2>
      </div>
    );
  // if (!pack) return <div>Pack not found</div>;

  return (
    <div className="max-w-screen-xl">
      <h1>{pack.title}</h1>
      <ButtonBar pack={pack} />
    </div>
  );
}
