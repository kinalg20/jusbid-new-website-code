import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  loginedUserSubject = new BehaviorSubject<any>({});
  selectedHotelRoom = new BehaviorSubject<any>({});

  constructor() {}
  getPopularHotel() {
    let images: any = [
      {
        previewImageSrc:
          "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZXxlbnwwfHwwfHw%3D&w=1000&q=80",
        cities: "Banglore",
        hotel: "The Foothills - A Boutique HotelOpens",
      },
      {
        previewImageSrc:
          "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/183190614.jpg?k=2471490126e826bfa463bc8f7b731e52f15a146dac72ea8db492f83f2aaa2db5&o=&hp=1",
        cities: "Jaipur",
        hotel: "FabHotel Ocean View Apartment Vasco",
      },
      {
        previewImageSrc:
          "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/183190562.jpg?k=f948adfb21c4726d49036e67941281650c64968e13a86f8d50a76a3c5b0ffa12&o=&hp=1",
        cities: "Indore",
        hotel: "Akrida By NT Heritage",
      },
      {
        previewImageSrc:
          "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/217236200.jpg?k=4033f79ae32c3671e0b28f72165d0e741921bf2ea0e2a83501abe2e3038c39d7&o=&hp=1",
        cities: "Ahemdabad",
        hotel: "OYO 29878 Sri Abirami Inn",
      },
      {
        previewImageSrc:
          "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/239071316.jpg?k=f133d2887e91a8ac40241ee5e13ae4a732b5b48b0e8d68f8a519704c6275d217&o=&hp=1",
        cities: "Jaisalmer",
        hotel: "The Promenade Open",
      },
      {
        previewImageSrc:
          "https://images.unsplash.com/photo-1566450653303-2614cbb292ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8emFhbnNlJTIwc2NoYW5zfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        cities: "Mumbai",
        hotel: "A La Villa CreoleOpens in new window",
      },

      {
        previewImageSrc:
          "https://media.istockphoto.com/photos/colorful-district-in-groningen-picture-id1294580904?b=1&k=20&m=1294580904&s=170667a&w=0&h=d06ZdPTcsIhw4KPhtrg-quyfhs2z30j-dZP1ulqTaCM=",
        cities: "Delhi",
        hotel: "Hotel King Palace",
      },
      {
        previewImageSrc:
          "https://images.unsplash.com/photo-1610569244414-5e7453a447a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&w=1000&q=80",
        cities: "Udaipur",
        hotel: "Oberoi",
      },
      {
        previewImageSrc:
          "https://images.unsplash.com/photo-1592501986002-1b84e645f3fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bXVyYW5vfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        cities: "Ajmer",
        hotel: "Villa KrishOpens in new window",
      },
      {
        previewImageSrc:
          "https://images.unsplash.com/photo-1592109727124-92bc2c03a5b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80",
        cities: "Kota",
        hotel: "The Lost Hostel, Varkala",
      },
      {
        previewImageSrc: "https://wallpaper.dog/large/17138252.png",
        cities: "Alwar",
        hotel: "Green Pepper Homestay",
      },
    ];
    return images;
  }
  getBlogsData() {
    let items: any =  [
      {
        previewImageSrc:
          "https://ak.picdn.net/shutterstock/videos/16187512/thumb/1.jpg",
        title: "Ways to tour Jaipur",
        sub_title: "Book these experiences for a close-up look at Udaipur",
      },
      {
        previewImageSrc:
          "https://cdn.cnn.com/cnnnext/dam/assets/140127103345-peninsula-shanghai-deluxe-mock-up-horizontal-large-gallery.jpg",
        title: "Ways to tour Udaipur",
        sub_title: "Book these experiences for a close-up look at Udaipur",
      },
      {
        previewImageSrc:
          "https://hips.hearstapps.com/bpc.h-cdn.co/assets/18/03/1516299055-presidential-cape-town.jpg",
        title: "Ways to tour Udaipur",
        sub_title: "Book these experiences for a close-up look at Udaipur",
      },
      {
        previewImageSrc:
          "https://thumbs.dreamstime.com/b/montage-manhattan-skyline-night-to-day-new-york-usa-44739434.jpg",
        title: "Ways to tour Udaipur",
        sub_title: "Book these experiences for a close-up look at Udaipur",
      },
      {
        previewImageSrc:
          "http://www.newhorizonhotel-manila.com/wp-content/uploads/2020/10/Reason-Advantage-Stay-In-5-Star-Hotel.jpg",
        title: "Ways to tour Udaipur",
        sub_title: "Book these experiences for a close-up look at Udaipur",
      },
      {
        previewImageSrc:
          "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2019/08/LONDON-BEST-LUXURY-HOTELS-2-1.jpg?fit=1300%2C731&ssl=1",
        title: "Ways to tour Udaipur",
        sub_title: "Book these experiences for a close-up look at Udaipur",
      },
      {
        previewImageSrc:
          "https://cdn.cheapism.com/images/042919_themed_hotel_rooms_slide_1.2e16d0ba.fill-1440x605.jpg",
        title: "Ways to tour Udaipur",
        sub_title: "Book these experiences for a close-up look at Udaipur",
      },
      {
        previewImageSrc:
          "http://ostrichtours.com/uploads/tour_itinerary/main/NIGHT.jpg",
        title: "Ways to tour Udaipur",
        sub_title: "Book these experiences for a close-up look at Udaipur",
      },
    ];
    return items;
  }
  getPopularDestination() {
    let product: any = [
      {
        previewImageSrc:
          "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZXxlbnwwfHwwfHw%3D&w=1000&q=80",
        cities: "Banglore",
      },
      {
        previewImageSrc:
          "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/183190614.jpg?k=2471490126e826bfa463bc8f7b731e52f15a146dac72ea8db492f83f2aaa2db5&o=&hp=1",
        cities: "Jaipur",
      },
      {
        previewImageSrc:
          "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/183190562.jpg?k=f948adfb21c4726d49036e67941281650c64968e13a86f8d50a76a3c5b0ffa12&o=&hp=1",
        cities: "Indore",
      },
      {
        previewImageSrc:
          "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/217236200.jpg?k=4033f79ae32c3671e0b28f72165d0e741921bf2ea0e2a83501abe2e3038c39d7&o=&hp=1",
        cities: "Ahemdabad",
      },
      {
        previewImageSrc:
          "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/239071316.jpg?k=f133d2887e91a8ac40241ee5e13ae4a732b5b48b0e8d68f8a519704c6275d217&o=&hp=1",
        cities: "Jaisalmer",
      },
      {
        previewImageSrc:
          "https://images.unsplash.com/photo-1566450653303-2614cbb292ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8emFhbnNlJTIwc2NoYW5zfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        cities: "Mumbai",
      },
  
      {
        previewImageSrc:
          "https://media.istockphoto.com/photos/colorful-district-in-groningen-picture-id1294580904?b=1&k=20&m=1294580904&s=170667a&w=0&h=d06ZdPTcsIhw4KPhtrg-quyfhs2z30j-dZP1ulqTaCM=",
        cities: "Delhi",
      },
      {
        previewImageSrc:
          "https://images.unsplash.com/photo-1610569244414-5e7453a447a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&w=1000&q=80",
        cities: "Udaipur",
      },
      {
        previewImageSrc:
          "https://images.unsplash.com/photo-1592501986002-1b84e645f3fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bXVyYW5vfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        cities: "Ajmer",
      },
      {
        previewImageSrc:
          "https://images.unsplash.com/photo-1592109727124-92bc2c03a5b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80",
        cities: "Kota",
      },
      {
        previewImageSrc: "https://wallpaper.dog/large/17138252.png",
        cities: "Alwar",
      },
    ];
    return product;
  }
}
