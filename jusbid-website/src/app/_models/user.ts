export interface User {
    id: number;
    name: string;
    email: string;
    address: Address;
    username: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Geo {
    lat: string;
    lng: string;
}

export interface LoginedUser {
    userId: string;
    userToken: string
}