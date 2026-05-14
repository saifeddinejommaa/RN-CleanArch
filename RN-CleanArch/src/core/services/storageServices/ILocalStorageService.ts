interface ILocalStorageService {
    setItem(key: string, value: string): Promise<void>;
    getItem(key: string): Promise<string | null>;
    removeItem(key: string): Promise<void>;
}

export default ILocalStorageService;