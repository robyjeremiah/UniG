import { ObjectId } from "mongodb";


export interface AuthState {
    isAuthenticated: boolean;
    isGuest: boolean;
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
    guestCheckout: () => void;
}

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface Category {
    _id: ObjectId;
    name: string;
    description: string;
    parent_category_id: string | null;
}

export interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    category_id: string;
    images: string[];
    stock_quantity: number;
    created_at: Date;
    updated_at: Date;
}