export default function ExampleViewer({
    demo,
    doc,
}: {
    demo: React.ReactNode
    doc: React.ReactNode
}) {
    return (
        <div className="space-y-8">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 border-b pb-2">Demo</h2>
                {demo}
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 border-b pb-2">文档说明</h2>
                <div className="prose max-w-full">{doc}</div>
            </div>
        </div>
    )
}
