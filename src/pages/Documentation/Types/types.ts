export interface AppType {
    id: string;
    type: string;
    default?: string;
    required?: boolean;
    description: string;
}

export type TypeChartProps = {
    id: string;
    types: AppType[]
};
