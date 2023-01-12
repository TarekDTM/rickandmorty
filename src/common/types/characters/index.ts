export interface Character {
    name: string,
    status: string,
    image: string,
}
export interface Info {
    count: number,
    pages: number,
    next: number,
    prev: number,
}
export interface CharactersRes {
    info: Info
    results: Character[]
}