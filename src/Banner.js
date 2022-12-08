export function Banner({ text }) {
    return (
        <div className="h-14 bg-green-600 border-t-2 border-b-2 border-green-800 flex items-center">
            <h1 className="text-2xl font-semibold p-3">{text}</h1>
        </div>
    )
}