export interface PageInfo {
    pageSize: number;
    order: Order;
    sort: string;
    site: string;
    intitle: string;
}

export type Order = 'asc' | 'desc';
