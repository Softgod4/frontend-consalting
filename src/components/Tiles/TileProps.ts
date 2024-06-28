export interface TileProps {
    interval: string;
    price: string;
    description: string;
    discount?: string;
    // последнее это скидка
    // сделал интерфейс для плиток, чтоб задавать им свойства через app.tsx
}
