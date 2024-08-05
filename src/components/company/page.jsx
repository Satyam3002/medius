import Image from 'next/image';

export default function Company() {
    return (
        <div className="flex flex-col items-center justify-center gap-y-12 pt-20 pb-12">
            <p className="text-3xl md:text-4xl font-bold">Backed by</p>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-7">
                <Image src="/softbank.png" alt="Softbank" width={144} height={64} className="md:w-36 md:h-20" />
                <Image src="/ally.png" alt="Ally" width={144} height={64} className="md:w-36 md:h-20" />
                <Image src="/citi.png" alt="Citi" width={144} height={64} className="md:w-36 md:h-20" />
                <Image src="/pingan.png" alt="Ping An" width={144} height={64} className="md:w-36 md:h-20" />
                <Image src="/gs.png" alt="Goldman Sachs" width={144} height={64} className="md:w-36 md:h-20" />
                <Image src="/kpcb.png" alt="KPCB" width={144} height={64} className="md:w-36 md:h-20" />
                <Image src="/ae.png" alt="AE" width={144} height={64} className="md:w-36 md:h-20" />
            </div>
        </div>
    );
}
