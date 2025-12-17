import React, { useState } from 'react';

interface Item {
    id: number;
    name: string;
}

const DragSort: React.FC = () => {
    const [items, setItems] = useState<Item[]>([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
    ]);
    const [dragItem, setDragItem] = useState<Item | null>(null);
    const dragStartHandler = (e: React.DragEvent, item: Item) => {
        setTimeout(() => {
            (e.target as HTMLElement).classList.add('bg-gray-300');
        }, 0);

        setDragItem(item);
    };
    const dragEndHandler = (e: React.DragEvent) => {
        setTimeout(() => {
            (e.target as HTMLElement).classList.remove('bg-gray-300');
        }, 0);
        setDragItem(null);
    };
    const onDragEnterHandler = (e: React.DragEvent, item: Item) => {
        e.preventDefault();
        if (!dragItem || (dragItem && dragItem.id === item.id)) return;
        const dragIndex = items.findIndex((e) => e.id === dragItem.id);
        const itemIndex = items.findIndex((e) => e.id === item.id);
        const newItems = [...items];
        const temp = newItems[itemIndex];
        newItems[itemIndex] = dragItem;
        newItems[dragIndex] = temp;
        setItems(newItems);
    };

    return (
        <div>
            <h1>拖拽排序</h1>
            <div
                className="w-full mx-auto p-4 bg-gray-50 rounded-lg"
                onDragOver={(e) => e.preventDefault()}
            >
                {items.map((item) => (
                    <div
                        key={item.id}
                        draggable
                        onDragStart={(e) => dragStartHandler(e, item)}
                        onDragEnter={(e) => onDragEnterHandler(e, item)}
                        onDragEnd={(e) => dragEndHandler(e)}
                        onDragOver={(e) => e.preventDefault()}
                        className={`w-full h-12 bg-blue-100 hover:bg-blue-200 
                                  mb-2 rounded-md flex items-center justify-center
                                  border border-blue-300 transition-all duration-200
                                  cursor-grab active:cursor-grabbing`}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DragSort;
