export interface Hotel {
    id: number;
    name: string;
    email: string;
    username: string;
}

export interface HotelDetail {
    id: number,
    name: string,
    category: string,
    image: string,
    rating: string,
    hotelAmenities: HotelAminities,
    latitude: string;
    longitude: string;
    plot_no: string;
    street: string;
    area: string;
    address: string;
    landmark: string;
    city: string;
    state: string;
    status: string;
    is_deleted: boolean;
    org_image: string;
    room_price: number;
}
export interface HotelAminities {
    hotelaminity: string;
}