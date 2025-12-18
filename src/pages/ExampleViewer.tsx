interface ExampleViewerProps {
    demo?: React.ReactNode;
    doc?: React.ReactNode;
}

function ExampleViewer(props: ExampleViewerProps) {
    const { demo, doc } = props;
    return (
        <div className="space-y-8">
            {demo && (
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4 border-b pb-2">Demo</h2>
                    {demo}
                </div>
            )}

            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 border-b pb-2">文档说明</h2>
                <div className="prose max-w-full">{doc}</div>
            </div>
        </div>
    );
}
export default ExampleViewer;
