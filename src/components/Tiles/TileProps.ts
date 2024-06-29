import { MouseEventHandler } from 'react';

export interface TileProps {
    interval: string;
    price: string;
    description: string;
    discount?: string;
    isSelected: boolean;
    onClick: MouseEventHandler<HTMLDivElement>;
    // discount это скидка
    // сделал интерфейс для плиток, чтоб задавать им свойства через app.tsx
}
