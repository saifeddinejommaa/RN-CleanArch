import ILocalStorageService from "./ILocalStorageService";
import  * as SecureStore from 'expo-secure-store';

 class LocalStorageService implements ILocalStorageService {
     async setItem(key: string, value: string): Promise<void> {
         await SecureStore.setItemAsync(key, value);
     }
     async getItem(key: string): Promise<string | null> {
        const value =  await SecureStore.getItemAsync(key);
        return value;
     }
     async removeItem(key: string): Promise<void> {
         await SecureStore.deleteItemAsync(key);
     }
}

export default LocalStorageService;