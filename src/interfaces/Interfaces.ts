export interface ILoginForm {
    user: string,
    password: string
}

export interface IAuth {
    isAuthenticated: boolean,
    token: string | null,
    isAdmin: boolean,
}

export interface IProfile {
    name: string | null,
    role: "Admin" | "User"
}

export interface IProducts {
    title: string,
    price: number,
    description: string,
    image?: string,
    id: string,
    category?: string
}

export interface IInitialStateProducts {
    loading: boolean,
    error: null | string
    data: null | IProducts[]
}

export interface ICart extends IProducts {
    quantity: number
}