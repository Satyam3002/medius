export default function Company() {
    return (
        <div className="flex flex-col items-center justify-center gap-y-12 pt-20 pb-12">
            <p className="text-3xl md:text-4xl font-bold">Backed by</p>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-7">
                <img src="/softbank.png" alt="Softbank" className="w-28 h-16 md:w-36 md:h-20" />
                <img src="/ally.png" alt="Ally" className="w-28 h-16 md:w-36 md:h-20" />
                <img src="/citi.png" alt="Citi" className="w-28 h-16 md:w-36 md:h-20" />
                <img src="/pingan.png" alt="Ping An" className="w-28 h-16 md:w-36 md:h-20" />
                <img src="/gs.png" alt="Goldman Sachs" className="w-28 h-16 md:w-36 md:h-20" />
                <img src="/kpcb.png" alt="KPCB" className="w-28 h-16 md:w-36 md:h-20" />
                <img src="/ae.png" alt="AE" className="w-28 h-16 md:w-36 md:h-20 items-center justify-center" />
            </div>
        </div>
    );
}
