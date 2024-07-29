export default function Heading({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h1 className="text-4xl my-10 text-center font-serif text-pink-500 italic">
                {children}
            </h1>
        </>
    )
}