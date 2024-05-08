import { IReactChildren } from "@/lib/types"


export default function Authlayout({children}: IReactChildren) {
    return (
        <div className="flex items-center justify-center pt-20">
            <div className="bg-white p-10 border rounded-lg shadow-xl">
                {children}
            </div>
        </div>
    )
}