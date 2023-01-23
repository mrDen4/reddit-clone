export function assoc <K extends string, V extends string>(key: K, value: () => string) {
    return <O extends object>(obj: O) => ({
        ...obj,
        [key]: value(),
    }) as K extends keyof O ? (Omit<O, K> & Record<K, V>) : (O & Record<K, V>)
}