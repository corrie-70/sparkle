/** 对象存储 */
export interface IObjectStorage {
    /**
     * 根据key获取对应对象, 如果不存在则返回对象指定的默认值
     * @param key key
     * @param defaultValue 默认值
     */
    getOrDefault: <T>(key: string, defaultValue: T) => Promise<T>;
    /**
     * 存储对象
     * @param key key
     * @param obj 对象
     */
    set: <T>(key: string, obj: T) => Promise<void>;
    /**
     * 移除对象，成功移除存在的对象返回true
     * @param key
     */
    remove: (key: string) => Promise<void>;
}
