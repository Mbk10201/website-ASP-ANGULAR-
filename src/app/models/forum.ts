export interface iNodes {
    id: number
    name: string
    role: number
    image: string
    categories: iCategory[]
}
  
export interface iCategory {
    id: number
    node: number
    name: string
    description: string
}

export interface iTopic {
    id: number
    subject: string
    content: string
    date: string
    category: number
    by: number
}

export interface iPost {
    id: number
    content: string
    date: string
    topic: number
    by: number
}