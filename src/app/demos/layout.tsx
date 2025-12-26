import Sidebar from './Sidebar'

export default function DemosLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className='demo-container'>
            <div className="flex justify-stretch">
                <div className="pr-2">
                    <h2 className='my-3 text-3xl font-extrabold'>Demos</h2>
                    <Sidebar />
                </div>

                <div className="w-full mt-3 p-2">
                    <div className="pl-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}