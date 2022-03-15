export interface Jobs {
    id: number
    jobname: string
    capital: number
    doors: string
    cansell: number
    grades: Grade[]
}

export interface Grade {
    grade: string
    clantag: string
    salary: number
    model: string
}

export interface User {
    username: string
    steamid32: string
    steamid64: string
    model: string
    tag: string
    country: string
    playerid: number
    admin: number
    tutorial: number
    nationality: number
    sexe: number
    jobid: number
    gradeid: number
    level: number
    xp: number
    money: number
    bank: number
    playtime: number
    viptime: number
}

export interface Items {
    memo: string
    delay: number
    jobid: number
    price: number
    description: string
    farmtime: number
    components: ComponentTable[]
}

export interface ComponentTable {
    gold: number
    steel: number
    copper: number
    aluminium: number
    zinc: number
    wood: number
    plastic: number
    water: number
}