
import Storage from 'electron-store';
import { IObjectStorage } from './iObjectStorage';

export class ObjectStorage implements IObjectStorage {
  private readonly storage: Storage;

  constructor() {
    this.storage = new Storage();
  }

  getOrDefault = <T>(key: string, defaultValue: T): Promise<T> => {
    const value = this.storage.get(key);

    return Promise.resolve((value as T) ?? defaultValue);
  };

  set = <T>(key: string, obj: T): Promise<void> => {
    this.storage.set(key, obj);

    return Promise.resolve();
  };

  remove = (key: string): Promise<void> => {
    this.storage.delete(key);

    return Promise.resolve();
  };
}
