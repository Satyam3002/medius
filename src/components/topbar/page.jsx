 export default function Topbar() {

    return (
        <div className="py-8 px-32">
           <div className="flex justify-between">
            <div className="flex flex-col ">
                <p className="font-bold text-lg text-customGreen1">Better</p>
                <p className="font-medium">Mortgage</p>
            </div>
            <div>
                <img src="/phn.svg" alt="" className="h-8 w-8" />
                <p className="text-lg ">Need help? Call(415) 523 8837</p>
            </div>
           </div>
           <div>
            <img src="/betty.png" alt="" />
           </div>
           
        </div>
    )
 }