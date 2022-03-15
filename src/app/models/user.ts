export interface iUser {
    id: number
    role: number
    username: string
    steamid: string
    email: string
    joindate: string
    steamdata: Steam[]
}

export interface Steam {
    profileurl: string
    avatar: string
    avatarmedium: string
    avatarfull: string
    userstatus: string
    realname: string
    primarygroupid: string
    accountcreateddate: string
    countrycode: string
    playinggameName: string
    playinggameId: string
    playinggameServerIP: string
}