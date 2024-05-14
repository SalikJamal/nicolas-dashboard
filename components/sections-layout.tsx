import { IReactChildren } from "@/lib/types"

interface ISectionsLayoutProps extends IReactChildren {
    leftChildren: React.ReactNode;
    rightChildren: React.ReactNode;
};


export default function SectionsLayout({ children, leftChildren, rightChildren }: ISectionsLayoutProps) {
    return (
        <div>
            <div>{leftChildren}</div>
            <main>{children}</main>
            <div>{rightChildren}</div>
        </div>
    )
}