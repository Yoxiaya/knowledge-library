export default function ExampleViewer({
    demo,
    doc,
}: {
    demo: React.ReactNode
    doc: React.ReactNode
}) {
    return (
        <div className="space-y-6">
            <div className="border p-4 rounded bg-white shadow">
                <h2 className="text-xl font-bold mb-3">Demo</h2>
                {demo}
            </div>

            <div className="border p-4 rounded bg-white shadow">
                <h2 className="text-xl font-bold mb-3">文档说明</h2>
                {doc}
            </div>
        </div>
    )
}
