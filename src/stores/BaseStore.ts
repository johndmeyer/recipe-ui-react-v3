 export type BaseStore<T, U> = {
    data: T | undefined;
    error: Error | undefined;
    isLoading: boolean;
    fetchData: (params?: U) => Promise<void>;
    //setData: (data: T) => Promise<void>;
    clearError:() => void;
    reset: () => void;  
 }