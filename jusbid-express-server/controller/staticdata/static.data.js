import hotelamenities from './amenities.json';
import cities from './cities.json';
import hotellist from './hotellist.json';
import hotelsdetails from './hotelsdetails.json';
import landingpage from './landingpage.json';
import popularhotels from './popularhotels.json'
import roomamenities from './roomamenities.json'

import { utility } from '../../common'

const staticDataController = {

    async getAmenities(req, res, next) {

        let amenitiesData = [
            {
                "name": "Free Wifi",
                "slug": "free-wifi",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;">
                <path d="m15.9999 20.33323c2.0250459 0 3.66667 1.6416241 3.66667 3.66667s-1.6416241 3.66667-3.66667 3.66667-3.66667-1.6416241-3.66667-3.66667 1.6416241-3.66667 3.66667-3.66667zm0 2c-.9204764 0-1.66667.7461936-1.66667 1.66667s.7461936 1.66667 1.66667 1.66667 1.66667-.7461936 1.66667-1.66667-.7461936-1.66667-1.66667-1.66667zm.0001-7.33323c3.5168171 0 6.5625093 2.0171251 8.0432368 4.9575354l-1.5143264 1.5127043c-1.0142061-2.615688-3.5549814-4.4702397-6.5289104-4.4702397s-5.5147043 1.8545517-6.52891042 4.4702397l-1.51382132-1.5137072c1.48091492-2.939866 4.52631444-4.9565325 8.04273174-4.9565325zm.0001-5.3332c4.9804693 0 9.3676401 2.540213 11.9365919 6.3957185l-1.4470949 1.4473863c-2.1746764-3.5072732-6.0593053-5.8431048-10.489497-5.8431048s-8.31482064 2.3358316-10.48949703 5.8431048l-1.44709488-1.4473863c2.56895177-3.8555055 6.95612261-6.3957185 11.93659191-6.3957185zm-.0002-5.3336c6.4510616 0 12.1766693 3.10603731 15.7629187 7.9042075l-1.4304978 1.4309874c-3.2086497-4.44342277-8.4328305-7.3351949-14.3324209-7.3351949-5.8991465 0-11.12298511 2.89133703-14.33169668 7.334192l-1.43047422-1.4309849c3.58629751-4.79760153 9.31155768-7.9032071 15.7621709-7.9032071z">
               </path>
              </svg>`
            },
            {
                "name": "Free parking on premises",
                "slug": "free-parking-on-premises",
                "icon": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm20.693-5l.42 1.119C29.253 15.036 30 16.426 30 18v9c0 1.103-.897 2-2 2h-2c-1.103 0-2-.897-2-2v-2H8v2c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2v-9c0-1.575.746-2.965 1.888-3.882L4.308 13H2v-2h3v.152l1.82-4.854A2.009 2.009 0 0 1 8.693 5h14.614c.829 0 1.58.521 1.873 1.297L27 11.151V11h3v2h-2.307zM6 25H4v2h2v-2zm22 0h-2v2h2v-2zm0-2v-5c0-1.654-1.346-3-3-3H7c-1.654 0-3 1.346-3 3v5h24zm-3-10h.557l-2.25-6H8.693l-2.25 6H25zm-15 7h12v-2H10v2z"></path></svg>`
            },
            {
                "name": "TV",
                "slug": "tv",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z"></path></svg>`
            },
            {
                "name": "Hair dryer",
                "slug": "hair-dryer",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M14 27l-.005.2a4 4 0 0 1-3.789 3.795L10 31H4v-2h6l.15-.005a2 2 0 0 0 1.844-1.838L12 27zM10 1c.536 0 1.067.047 1.58.138l.38.077 17.448 3.64a2 2 0 0 1 1.585 1.792l.007.166v6.374a2 2 0 0 1-1.431 1.917l-.16.04-13.554 2.826 1.767 6.506a2 2 0 0 1-1.753 2.516l-.177.008H11.76a2 2 0 0 1-1.879-1.315l-.048-.15-1.88-6.769A9 9 0 0 1 10 1zm5.692 24l-1.799-6.621-1.806.378a8.998 8.998 0 0 1-1.663.233l-.331.008L11.76 25zM10 3a7 7 0 1 0 1.32 13.875l.331-.07L29 13.187V6.813L11.538 3.169A7.027 7.027 0 0 0 10 3zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path></svg>   `
            },
            {
                "name": "Cleaning products",
                "slug": "cleaning-products",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M16 1c4.258 0 7.606 4.443 7.968 10h.915a2 2 0 0 1 2 2l-.003.11-.01.11-1.777 16a2 2 0 0 1-1.829 1.774l-.159.006H8.895a2 2 0 0 1-1.964-1.621l-.024-.158L6.438 25H5a2 2 0 0 1-1.995-1.85L3 23v-9a5 5 0 0 1 4.783-4.995L8 9h.298C9.241 4.37 12.305 1 16 1zm7.993 20H17v2a2 2 0 0 1-1.85 1.995L15 25H8.45l.445 4h14.21zM15 21H5v2h10zm0-10H8a3 3 0 0 0-2.995 2.824L5 14v5h10zm9.883 2H17v6h7.215zM16 3c-2.512 0-4.805 2.433-5.654 6H15a2 2 0 0 1 1.995 1.85L17 11h4.963C21.624 6.453 19.005 3 16 3z"></path></svg>  `
            },
            {
                "name": "Shampoo",
                "slug": "shampoos",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M20 1v2h-3v2h1a2 2 0 0 1 1.995 1.85L20 7v2a4 4 0 0 1 3.995 3.8L24 13v14a4 4 0 0 1-3.8 3.995L20 31h-8a4 4 0 0 1-3.995-3.8L8 27V13a4 4 0 0 1 3.8-3.995L12 9V7a2 2 0 0 1 1.85-1.995L14 5h1V3H8V1zm2 21H10v5a2 2 0 0 0 1.85 1.995L12 29h8a2 2 0 0 0 1.995-1.85L22 27zm0-6H10v4h12zm-2-5h-8a2 2 0 0 0-1.995 1.85L10 13v1h12v-1a2 2 0 0 0-2-2zm-2-4h-4v2h4z"></path></svg>`
            },
            {
                "name": "Hot water",
                "slug": "hot-water",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M16 32c6.627 0 12-5.373 12-12 0-6.218-3.671-12.51-10.924-18.889L16 .18l-1.076.932C7.671 7.491 4 13.782 4 20c0 6.577 5.397 12 12 12zm0-2c-5.496 0-10-4.525-10-10 0-5.327 3.115-10.882 9.424-16.65l.407-.37.169-.149.576.518c6.043 5.526 9.156 10.855 9.407 15.977l.013.34L26 20c0 5.523-4.477 10-10 10zm-3.452-5.092a8.954 8.954 0 0 1 2.127-4.932l.232-.26.445-.462a6.973 6.973 0 0 0 1.827-4.416l.007-.306-.006-.307-.007-.11a6.03 6.03 0 0 0-2.009-.057 4.979 4.979 0 0 1-1.443 4.008 10.951 10.951 0 0 0-2.87 5.016 6.034 6.034 0 0 0 1.697 1.826zM16 26l.253-.005.25-.016-.003-.137c0-1.32.512-2.582 1.464-3.533a10.981 10.981 0 0 0 3.017-5.656 6.026 6.026 0 0 0-1.803-1.743 8.971 8.971 0 0 1-2.172 5.493l-.228.255-.444.462a6.96 6.96 0 0 0-1.827 4.415l-.006.276c.48.123.982.189 1.499.189z"></path></svg>`
            },
            {
                "name": "Essentialsr",
                "slug": "essentials",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M11 1v7l1.898 20.819.007.174c-.025 1.069-.804 1.907-1.818 1.999a2 2 0 0 1-.181.008h-7.81l-.174-.008C1.86 30.87 1.096 30.018 1.096 29l.002-.09 1.907-21L3.001 1zm6 0l.15.005a2 2 0 0 1 1.844 1.838L19 3v7.123l-2 8V31h-2V18.123l.007-.163.02-.162.033-.16L16.719 11H13V1zm11 0a2 2 0 0 1 1.995 1.85L30 3v26a2 2 0 0 1-1.85 1.995L28 31h-7v-2h7v-2h-7v-2h7v-2h-7v-2h7v-2h-7v-2h7v-2h-7v-2h7v-2h-7V9h7V7h-7V5h7V3h-7V1zM9.088 9h-4.18L3.096 29l.058.002L10.906 29l-.004-.058zM17 3h-2v6h2zM9.002 3H5L5 7h4.004z"></path></svg>`
            },
            {
                "name": "Bed linen",
                "slug": "bed-linen",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M19.586 2a2 2 0 0 1 1.284.467l.13.119L29.414 11a2 2 0 0 1 .578 1.238l.008.176V25a5 5 0 0 1-4.783 4.995L25 30H4a2 2 0 0 1-1.995-1.85L2 28V7a5 5 0 0 1 4.783-4.995L7 2zM7 4a3 3 0 0 0-2.995 2.824L4 7v14a3 3 0 0 0 2.824 2.995L7 24h19v2H7a4.978 4.978 0 0 1-3-1v3h21a3 3 0 0 0 2.995-2.824L28 25v-3H6v-2h22v-6h-5a5 5 0 0 1-4.995-4.783L18 9V4zm20.586 8L20 4.415V9a3 3 0 0 0 2.824 2.995L23 12z"></path></svg>`
            },
            {
                "name": "Extra pillows and blankets",
                "slug": "extra-pillows-and-blankets",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26.805 4.006a2.995 2.995 0 0 0-1.873.82l-.022.022-.113-.021a47.19 47.19 0 0 0-16.86-.132l-.848.153-.021-.022A3 3 0 0 0 2 7l.007.211c.04.56.234 1.09.554 1.536l.025.033-.044.278c-.718 4.722-.717 9.14.001 13.88l.044.279-.025.035A3 3 0 0 0 5 28l.195-.006a2.995 2.995 0 0 0 1.873-.82l.021-.023.114.022a47.19 47.19 0 0 0 16.86.132l.847-.154.022.023A3 3 0 0 0 30 25l-.007-.212a2.992 2.992 0 0 0-.554-1.536l-.027-.034.045-.28c.718-4.74.719-9.158 0-13.88l-.044-.278.026-.033A3 3 0 0 0 27 4l-.194.006zM27 6a1 1 0 0 1 .676 1.737l-.4.367.09.534c.84 5.04.84 9.662-.001 14.723l-.09.534.4.367a1 1 0 1 1-1.525 1.266l-.367-.59-.68.138a45.287 45.287 0 0 1-18.205 0l-.68-.138-.368.59a1 1 0 1 1-1.525-1.265l.4-.367-.09-.535c-.841-5.06-.842-9.683 0-14.723l.088-.534-.399-.367A1 1 0 1 1 5.85 6.473l.367.59.68-.139a45.287 45.287 0 0 1 18.205 0l.68.138.368-.59A.998.998 0 0 1 27 6z"></path></svg>`
            },
            {
                "name": "Room darkening shades",
                "slug": "room-darkening-shades",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M1 2V0h30v2h-2v18a2 2 0 0 1-1.85 1.995L27 22H17v2.171a3.001 3.001 0 1 1-2 0V22H5a2 2 0 0 1-1.995-1.85L3 20V2zm15 24a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM27 2H5v18h22z"></path></svg>`
            },
            {
                "name": "Iron",
                "slug": "iron",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M12 28a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM16.027 3l.308.004a12.493 12.493 0 0 1 11.817 9.48l.07.3 1.73 7.782.027.144a2 2 0 0 1-1.83 2.285L28 23H2.247l-.15-.005a2 2 0 0 1-1.844-1.838L.247 21v-7l.004-.217a5 5 0 0 1 4.773-4.778L5.247 9h9V5h-14V3zm11.528 16H2.245l.002 2H28zM16.247 5.002V11h-11l-.177.005a3 3 0 0 0-2.818 2.819L2.247 14l-.001 3H27.11l-.84-3.783-.067-.28a10.494 10.494 0 0 0-9.596-7.921l-.292-.012z"></path></svg>`
            },
            {
                "name": "Clothes drying rack",
                "slug": "clothes-drying-rack",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M16 2a5 5 0 0 1 1.661 9.717 1.002 1.002 0 0 0-.653.816l-.008.126v.813l13.23 9.052a3 3 0 0 1 1.299 2.279l.006.197a3 3 0 0 1-3 3H3.465a3 3 0 0 1-1.694-5.476L15 13.472v-.813c0-1.211.724-2.285 1.816-2.757l.176-.07a3 3 0 1 0-3.987-3.008L13 7h-2a5 5 0 0 1 5-5zm0 13.211L2.9 24.175A1 1 0 0 0 3.465 26h25.07a1 1 0 0 0 .565-1.825z"></path></svg>`
            },
            {
                "name": "Clothes storage",
                "slug": "clothes-storage",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M25 1a3 3 0 0 1 2.995 2.824L28 4v22a3 3 0 0 1-2.824 2.995L25 29v2h-2v-2H9v2H7v-2a3 3 0 0 1-2.995-2.824L4 26V4a3 3 0 0 1 2.824-2.995L7 1h18zm1 20H6v5a1 1 0 0 0 .883.993L7 27h18a1 1 0 0 0 .993-.883L26 26v-5zm-10 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm9-20h-8v16h9V4a1 1 0 0 0-.883-.993L25 3zM15 3H7a1 1 0 0 0-.993.883L6 4v15h9V3zm-3 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm8 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>`
            },
            {
                "name": "Exercise equipment",
                "slug": "exercise-equipment",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M10 5a2 2 0 0 1 1.995 1.85L12 7v8h8V7a2 2 0 0 1 1.85-1.995L22 5h2a2 2 0 0 1 1.995 1.85L26 7v2h2a2 2 0 0 1 1.995 1.85L30 11v4h2v2h-2v4a2 2 0 0 1-1.85 1.995L28 23h-2v2a2 2 0 0 1-1.85 1.995L24 27h-2a2 2 0 0 1-1.995-1.85L20 25v-8h-8v8a2 2 0 0 1-1.85 1.995L10 27H8a2 2 0 0 1-1.995-1.85L6 25v-2H4a2 2 0 0 1-1.995-1.85L2 21v-4H0v-2h2v-4a2 2 0 0 1 1.85-1.995L4 9h2V7a2 2 0 0 1 1.85-1.995L8 5zm14 2h-2v18h2zM10 7H8v18h2zm18 4h-2v10h2zM6 11H4v10h2z"></path></svg>`
            },
            {
                "name": "Suitable for events",
                "slug": "suitable-for-events",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M16 0c5.909 0 11 5.275 11 11 0 4.848-3.228 9.268-9.547 13.278L19.65 27.2a1.125 1.125 0 0 1-.9 1.801H17v3h-2v-3h-1.75a1.125 1.125 0 0 1-.901-1.799l2.14-2.862C8.212 20.918 5 16.457 5 11 5 4.925 9.925 0 16 0zm-.005 25.667L14.997 27h2zM16 2a9 9 0 0 0-9 9c0 4.606 2.722 8.428 8.309 11.508l.376.204.272.142.311-.192c5.61-3.533 8.474-7.246 8.715-11.126l.013-.27L25 11c0-4.636-4.212-9-9-9z"></path></svg>`
            },
            {
                "name": "Books and reading material",
                "slug": "books-and-reading-material",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="m1.66675 2.67728c0-1.29010774 1.19757945-2.22892485 2.43214873-1.95293212l.14254843.03728562 11.76455284 3.5293665 11.7747926-3.3852093c1.1836744-.3403064 2.3638086.45712676 2.5321485 1.63303369l.0152796.14287691.0051793.1462187v23.09468c0 .8279727-.5091718 1.5640524-1.2698418 1.8619846l-.155411.0536419-12.6207 3.7862c-.1499506.0449851-.3078242.0539821-.4609439.026991l-.1137505-.026991-12.62071315-3.786204c-.79308169-.2379357-1.35183119-.937138-1.41857691-1.7513494l-.00671274-.1642731zm1.99999664.00000464v23.24528886l12.33325336 3.6994265 12.3334-3.6994076v-23.0946724l-12.0569924 3.46639925c-.1474472.0423911-.3021582.05014891-.4521925.02334213l-.1114623-.02658488zm21.66607876 17.47821536v2.088l-9.333 2.8v-2.087zm0-6v2.088l-9.333 2.8v-2.087zm0-5.999v2.087l-9.333 2.8v-2.087z"></path></svg>`
            },
            {
                "name": "Childrens books and toys",
                "slug": "childrens-books-and-toy",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="m1.66675 2.67728c0-1.29010774 1.19757945-2.22892485 2.43214873-1.95293212l.14254843.03728562 11.76455284 3.5293665 11.7747926-3.3852093c1.1836744-.3403064 2.3638086.45712676 2.5321485 1.63303369l.0152796.14287691.0051793.1462187v23.09468c0 .8279727-.5091718 1.5640524-1.2698418 1.8619846l-.155411.0536419-12.6207 3.7862c-.1499506.0449851-.3078242.0539821-.4609439.026991l-.1137505-.026991-12.62071315-3.786204c-.79308169-.2379357-1.35183119-.937138-1.41857691-1.7513494l-.00671274-.1642731zm1.99999664.00000464v23.24528886l12.33325336 3.6994265 12.3334-3.6994076v-23.0946724l-12.0569924 3.46639925c-.1474472.0423911-.3021582.05014891-.4521925.02334213l-.1114623-.02658488zm21.66607876 17.47821536v2.088l-9.333 2.8v-2.087zm0-6v2.088l-9.333 2.8v-2.087zm0-5.999v2.087l-9.333 2.8v-2.087z"></path></svg>`
            },
            {
                "name": "Baby safety gates",
                "slug": "baby-safety-gates",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M25.5 1l-.05.034a3.001 3.001 0 0 1 2.545 2.79L28 4v1h2v2h-2v22a2 2 0 0 1-1.85 1.995L26 31H10a2 2 0 0 1-1.995-1.85L8 29v-2H6a2 2 0 0 1-1.995-1.85L4 25V7H2V5h2V4a3 3 0 0 1 2.824-2.995L7 1zm.5 6h-2v18c0 .05-.002.1-.005.15L24 25a2.011 2.011 0 0 1-.374 1.165A2.007 2.007 0 0 1 22 27H10v2h16zM6 25h16v-2H6zm0-4h16v-2H6zM22 3H7a1 1 0 0 0-1 1v13h16zm3 0a1 1 0 0 0-.993.883L24 4v1h2V4a1 1 0 0 0-.883-.993z"></path></svg>`
            },
            {
                "name": "Ceiling fan",
                "slug": "ceiling-fan",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M20.332 3.082c1.495 2.243.961 5.546-1.387 9.907l-.112.188.172.182c.112.128.216.263.311.404l.227.38.14.017c.7.057 1.775-.115 2.868-.48.884-.294 1.78-.777 2.68-1.448l.66-.525a3 3 0 0 1 4.773 1.33l.115.442c.591 3.346.022 5.73-1.857 6.982-2.243 1.496-5.546.962-9.907-1.387a3.004 3.004 0 0 1-.27-.164l-.07.065c-.122.108-.249.21-.382.303l-.282.187-.01.542c-.016.696.156 1.68.489 2.678.294.884.778 1.78 1.448 2.68l.26.337.265.323a3 3 0 0 1-.36 4.228C19 31 17.947 31 17 31l-.535-.005-1.394-.104c-1.242-.177-2.564-.637-3.362-1.835-1.495-2.243-.961-5.546 1.387-9.907.046-.086.096-.169.15-.248a4.115 4.115 0 0 1-.37-.404.82.82 0 0 0-.172-.23.498.498 0 0 0-.217-.108c-.688-.103-1.85.065-3.035.46-.884.295-1.78.778-2.68 1.449l-.66.525a3 3 0 0 1-4.773-1.33l-.116-.443c-.59-3.345-.02-5.73 1.858-6.982 2.243-1.495 5.546-.96 9.907 1.387l.084.05c.313-.297.556-.503.73-.618l.203-.125.025-.211c.057-.7-.114-1.775-.479-2.868-.294-.884-.778-1.78-1.448-2.68l-.525-.661a3 3 0 0 1 1.33-4.772l.442-.116c3.346-.59 5.73-.021 6.982 1.858zm-5.315 16.796l-.16.219c-2.033 3.776-2.498 6.452-1.484 7.85C14.5 29.5 18 29.5 18.813 28.723c.377-.36.466-.892.189-1.317l-.359-.448c-.955-1.199-1.641-2.413-2.05-3.642-.354-1.06-.562-2.12-.59-3.023L16 20l-.137-.002a4.01 4.01 0 0 1-.638-.073l-.208-.047zm-10.93-6.36c-1.553 1.127-1.553 4.627-.777 5.44.359.377.891.466 1.316.189l.448-.359c1.2-.956 2.413-1.641 3.642-2.05 1.166-.39 2.332-.602 3.288-.592L12 16c0-.141.007-.28.022-.418l.075-.462-.16-.118c-3.776-2.033-6.452-2.498-7.85-1.484zm23.242-.356l-.448.359c-1.2.956-2.413 1.641-3.642 2.05-1.148.383-2.296.596-3.243.592-.01.258-.044.51-.101.752l-.068.251.191.141c3.776 2.033 6.452 2.498 7.85 1.484 1.554-1.127 1.554-4.627.777-5.44-.359-.377-.891-.466-1.316-.189zM16 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM13.205 3.388c-.376.36-.465.892-.188 1.317l.36.447c.955 1.2 1.64 2.414 2.05 3.643.377 1.132.589 2.265.591 3.204l.542.04.295.053.212.052.095-.129c2.033-3.776 2.498-6.452 1.484-7.85-1.127-1.553-4.627-1.553-5.44-.777z"></path></svg> `
            },
            {
                "name": "Fire extinguisher",
                "slug": "fire-extinguisher",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M7 28H5V15c0-4.997 3.356-9.304 8.061-10.603A3 3 0 0 1 17.69 2.52l2.66-2.28 1.302 1.52L19.036 4H23v2h-4.17A3.008 3.008 0 0 1 17 7.83l.001.242a7.007 7.007 0 0 1 5.982 6.446l.013.24L23 15v15a2 2 0 0 1-1.85 1.995L21 32H11a2 2 0 0 1-1.995-1.85L9 30v-6H7zm9-18c-2.617 0-4.775 2.014-4.983 4.573l-.013.22L11 15v15h10V15.018l-.003-.206A5 5 0 0 0 16 10zm-2.654-3.6a9.002 9.002 0 0 0-6.342 8.327L7 15v7h2v-7.018l.005-.244A7.001 7.001 0 0 1 15 8.071v-.242a3.01 3.01 0 0 1-1.654-1.43zM16 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>`
            },
            {
                "name": "First aid kit",
                "slug": "first-aid-kit",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26 3a5 5 0 0 1 4.995 4.783L31 8v16a5 5 0 0 1-4.783 4.995L26 29H6a5 5 0 0 1-4.995-4.783L1 24V8a5 5 0 0 1 4.783-4.995L6 3zm0 2H6a3 3 0 0 0-2.995 2.824L3 8v16a3 3 0 0 0 2.824 2.995L6 27h20a3 3 0 0 0 2.995-2.824L29 24V8a3 3 0 0 0-2.824-2.995zm-7 4v4h4v6h-4v4h-6v-4.001L9 19v-6l4-.001V9zm-2.001 2h-2L15 14.999h-4.001V17L15 16.998 14.999 21h2L17 17h3.999v-2H17z"></path></svg>`
            },
            {
                "name": "Fast wifi",
                "slug": "fast-wifi",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="m15.9999 20.33323c2.0250459 0 3.66667 1.6416241 3.66667 3.66667s-1.6416241 3.66667-3.66667 3.66667-3.66667-1.6416241-3.66667-3.66667 1.6416241-3.66667 3.66667-3.66667zm0 2c-.9204764 0-1.66667.7461936-1.66667 1.66667s.7461936 1.66667 1.66667 1.66667 1.66667-.7461936 1.66667-1.66667-.7461936-1.66667-1.66667-1.66667zm.0001-7.33323c3.5168171 0 6.5625093 2.0171251 8.0432368 4.9575354l-1.5143264 1.5127043c-1.0142061-2.615688-3.5549814-4.4702397-6.5289104-4.4702397s-5.5147043 1.8545517-6.52891042 4.4702397l-1.51382132-1.5137072c1.48091492-2.939866 4.52631444-4.9565325 8.04273174-4.9565325zm.0001-5.3332c4.9804693 0 9.3676401 2.540213 11.9365919 6.3957185l-1.4470949 1.4473863c-2.1746764-3.5072732-6.0593053-5.8431048-10.489497-5.8431048s-8.31482064 2.3358316-10.48949703 5.8431048l-1.44709488-1.4473863c2.56895177-3.8555055 6.95612261-6.3957185 11.93659191-6.3957185zm-.0002-5.3336c6.4510616 0 12.1766693 3.10603731 15.7629187 7.9042075l-1.4304978 1.4309874c-3.2086497-4.44342277-8.4328305-7.3351949-14.3324209-7.3351949-5.8991465 0-11.12298511 2.89133703-14.33169668 7.334192l-1.43047422-1.4309849c3.58629751-4.79760153 9.31155768-7.9032071 15.7621709-7.9032071z"></path></svg>`
            },
            {
                "name": "Dedicated workspace",
                "slug": "dedicated-workspace",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26 2a1 1 0 0 1 .922.612l.04.113 2 7a1 1 0 0 1-.847 1.269L28 11h-3v5h6v2h-2v13h-2l.001-2.536a3.976 3.976 0 0 1-1.73.527L25 29H7a3.982 3.982 0 0 1-2-.535V31H3V18H1v-2h5v-4a1 1 0 0 1 .883-.993L7 11h.238L6.086 8.406l1.828-.812L9.427 11H12a1 1 0 0 1 .993.883L13 12v4h10v-5h-3a1 1 0 0 1-.987-1.162l.025-.113 2-7a1 1 0 0 1 .842-.718L22 2h4zm1 16H5v7a2 2 0 0 0 1.697 1.977l.154.018L7 27h18a2 2 0 0 0 1.995-1.85L27 25v-7zm-16-5H8v3h3v-3zm14.245-9h-2.491l-1.429 5h5.349l-1.429-5z"></path></svg>`
            },
            {
                "name": "Kitchen",
                "slug": "Kitchen",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z"></path></svg>`
            },
            {
                "name": "Refrigerator",
                "slug": "refrigerator",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M25 1a2 2 0 0 1 1.995 1.85L27 3v26a2 2 0 0 1-1.85 1.995L25 31H7a2 2 0 0 1-1.995-1.85L5 29V3a2 2 0 0 1 1.85-1.995L7 1zm0 10H7v18h18zm-15 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM25 3H7v6h18zM10 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>`
            },
            {
                "name": "Dishes and silverware",
                "slug": "dishes-and-silverware",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M29 1v2c-7.18 0-13 5.82-13 13 0 7.077 5.655 12.833 12.693 12.996L29 29v2c-8.284 0-15-6.716-15-15 0-8.18 6.547-14.83 14.686-14.997zM3 1h2v6h2V1h2v6h2V1h2v9a5.002 5.002 0 0 1-3.999 4.9L9 31H7V14.9a5.01 5.01 0 0 1-3.978-4.444l-.017-.232L3 10zm26 6v2a7 7 0 0 0-.24 13.996L29 23v2a9 9 0 0 1-.265-17.996zM10.999 9h-6v.975l.005.176a3 3 0 0 0 5.99.025L11 10z"></path></svg>`
            },
            {
                "name": "Steel Induction cooker",
                "slug": "steel induction cooker",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M27 0a2 2 0 0 1 1.995 1.85L29 2v26a2 2 0 0 1-1.85 1.995L27 30H5a2 2 0 0 1-1.995-1.85L3 28V2A2 2 0 0 1 4.85.005L5 0zm0 2H5v26h22zm-3 22a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5.333 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5.334 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM8 24a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm13-10a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm-10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM21 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM11 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM11 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></svg>`
            },
            {
                "name": "Kettle",
                "slug": "kettle",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26 28v2H6v-2h20zM16 1a8.638 8.638 0 0 1 7.834 5H28a1 1 0 0 1 .997 1.076c-.295 3.873-1.576 6.45-3.894 7.564l.893 10.273a1 1 0 0 1-.88 1.08L25 26H7a1 1 0 0 1-1-.971l.004-.116L7.397 8.887c.026-.3.068-.597.124-.887H5a1 1 0 0 0-.993.883L4 9v10H2V9a3 3 0 0 1 2.824-2.995L5 6h3.165A8.638 8.638 0 0 1 16 1zm6.431 7H9.57a6.647 6.647 0 0 0-.138.7l-.041.36L8.09 24h15.819L22.61 9.06A6.67 6.67 0 0 0 22.431 8zm-5.45 3c-.147 2.02-1.163 4.144-2.7 5.783l-.231.238a6.96 6.96 0 0 0-1.984 3.98h-2.015a8.956 8.956 0 0 1 2.356-5.158l.228-.236c1.304-1.304 2.18-3.034 2.339-4.607h2.007zm4 0c.013.166.019.333.019.5-.001 2.164-1.054 4.508-2.72 6.283l-.23.238A6.967 6.967 0 0 0 16.28 21h-2.064a8.955 8.955 0 0 1 2.191-4.157l.228-.236C18.08 15.163 19 13.196 19 11.499a4.94 4.94 0 0 0-.026-.5h2.008zm5.907-3h-2.409c.04.207.073.418.098.63l.026.257.306 3.518c.98-.792 1.634-2.165 1.946-4.18L26.888 8zM16 3a6.633 6.633 0 0 0-5.552 3h11.104a6.635 6.635 0 0 0-5.043-2.98l-.275-.016L16 3z"></path></svg>`
            },
            {
                "name": "Shared patio or balcony",
                "slug": "shared-ratio-or-balcony",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M23 1a2 2 0 0 1 1.995 1.85L25 3v16h4v2h-2v8h2v2H3v-2h2v-8H3v-2h4V3a2 2 0 0 1 1.85-1.995L9 1zM9 21H7v8h2zm4 0h-2v8h2zm4 0h-2v8h2zm4 0h-2v8h2zm4 0h-2v8h2zm-10-8H9v6h6zm8 0h-6v6h6zM15 3H9v8h6zm8 0h-6v8h6z"></path></svg>`
            },
            {
                "name": "Coffee",
                "slug": "coffee",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M25 2a1 1 0 0 1 .936.649l.034.108 1 4a1 1 0 0 1-.857 1.237L26 8h-9v2h-2V7.999H4.999v20l3 .001a5 5 0 0 1-.716-4.66l.102-.263 2.515-6.04-1.794-3.59a1 1 0 0 1 .779-1.44L9 12h14a1 1 0 0 1 .94 1.341l-.046.106L22.618 16H24a5 5 0 0 1 4.995 4.783L29 21v4h-2v-4a3 3 0 0 0-2.824-2.995L24 18h-1.5l2.115 5.077A4.998 4.998 0 0 1 24 28L27 28v2H4a1 1 0 0 1-.993-.883L3 29V3a1 1 0 0 1 .883-.993L4 2zM12.647 22a6.638 6.638 0 0 0-2.91.628l-.506 1.218a3 3 0 0 0-.194.682l-.028.235L9 25a3 3 0 0 0 2.824 2.995l.156.004 8.027.001.23-.01a3 3 0 0 0 2.603-2.023c-1.692-.121-2.93-.67-4.836-1.889l-.375-.243C15.493 22.44 14.452 22 12.647 22zm7.686-4h-8.667l-.913 2.188A9.062 9.062 0 0 1 12.647 20c2.188 0 3.515.52 5.75 1.95l.38.246c1.74 1.136 2.741 1.627 4.034 1.76l-.042-.11zm1.048-4H10.618l1 2h8.763zm2.837-10.001H4.999v2h19.719z"></path></svg>`
            },
            {
                "name": "Outdoor dining area",
                "slug": "outdoor-dining-area",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M29 15v16h-2v-6h-6v6h-2v-6l.005-.15a2 2 0 0 1 1.838-1.844L21 23h6v-8zM5 15v8h6a2 2 0 0 1 1.995 1.85L13 25v6h-2v-6H5v6H3V15zM16 1a15 15 0 0 1 13.556 8.571 1 1 0 0 1-.79 1.423l-.113.006H17v8h8v2h-8v10h-2V21H7v-2h8v-8H3.347a1 1 0 0 1-.946-1.323l.043-.106A15 15 0 0 1 16 1zm0 2C11.71 3 7.799 5.097 5.402 8.468l-.197.284L5.042 9h21.915l-.162-.248a12.995 12.995 0 0 0-10.1-5.734l-.365-.014z"></path></svg>`
            },
            {
                "name": "EV charger",
                "slug": "ev-charger",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M2 4h2v2h2V4h2v5a3.001 3.001 0 0 1-2 2.829V17a1 1 0 0 0 .883.993L7 18h3V5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v23h2v2H2v-2h8v-8H7a3 3 0 0 1-2.995-2.824L4 17v-5.17a3.002 3.002 0 0 1-1.994-2.636L2 9V4zm23 0H13l-.117.007A1 1 0 0 0 12 5v23h14V5a1 1 0 0 0-1-1zm-4.434 13l-1.799 3H21a1 1 0 0 1 .911 1.413l-.054.101L19.765 25h-2.332l1.802-3H17a1 1 0 0 1-.911-1.413l.054-.101L18.233 17h2.333zM23 6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8zm-1 2h-6v4h6V8zM6 8H4v1a1 1 0 0 0 .77.974l.113.02L5 10a1 1 0 0 0 .993-.883L6 9V8z"></path></svg>`
            },
            {
                "name": "Paid car",
                "slug": "paid-car",
                "icon": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm20.693-5l.42 1.119C29.253 15.036 30 16.426 30 18v9c0 1.103-.897 2-2 2h-2c-1.103 0-2-.897-2-2v-2H8v2c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2v-9c0-1.575.746-2.965 1.888-3.882L4.308 13H2v-2h3v.152l1.82-4.854A2.009 2.009 0 0 1 8.693 5h14.614c.829 0 1.58.521 1.873 1.297L27 11.151V11h3v2h-2.307zM6 25H4v2h2v-2zm22 0h-2v2h2v-2zm0-2v-5c0-1.654-1.346-3-3-3H7c-1.654 0-3 1.346-3 3v5h24zm-3-10h.557l-2.25-6H8.693l-2.25 6H25zm-15 7h12v-2H10v2z"></path></svg>`
            },
            {
                "name": "Smoking allowed",
                "slug": "smoking-allowed",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M30 19v8h-2v-8zm-4 0v8H3a2 2 0 0 1-1.995-1.85L1 25v-4a2 2 0 0 1 1.85-1.995L3 19zm-2 2H3v4h21zM21 3a4 4 0 0 1 3.356 6.178l-.1.145.137.041a8.004 8.004 0 0 1 5.603 7.387L30 17h-2a6 6 0 0 0-5.775-5.996L22 11h-1V9a2 2 0 0 0 .15-3.995L21 5zm-4 0v2a4 4 0 0 0-.2 7.995L17 13h5a4 4 0 0 1 3.995 3.8L26 17h-2a2 2 0 0 0-1.85-1.995L22 15h-5a6 6 0 0 1-.225-11.996z"></path></svg>`
            },
            {
                "name": "Air conditioning",
                "slug": "air-conditioning",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M17 1v4.03l4.026-2.324 1 1.732L17 7.339v6.928l6-3.464V5h2v4.648l3.49-2.014 1 1.732L26 11.381l4.026 2.325-1 1.732L24 12.535l-6 3.464 6 3.465 5.026-2.902 1 1.732L26 20.618l3.49 2.016-1 1.732L25 22.351V27h-2v-5.804l-6-3.465v6.929l5.026 2.902-1 1.732L17 26.97V31h-2v-4.031l-4.026 2.325-1-1.732L15 24.66v-6.929l-6 3.464V27H7v-4.65l-3.49 2.016-1-1.732 3.489-2.016-4.025-2.324 1-1.732 5.025 2.901 6-3.464-6-3.464-5.025 2.903-1-1.732L6 11.38 2.51 9.366l1-1.732L7 9.648V5h2v5.803l6 3.464V7.339L9.974 4.438l1-1.732L15 5.03V1z"></path></svg>`
            },
            {
                "name": "Workspace",
                "slug": "workspace",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26 2a1 1 0 0 1 .922.612l.04.113 2 7a1 1 0 0 1-.847 1.269L28 11h-3v5h6v2h-2v13h-2l.001-2.536a3.976 3.976 0 0 1-1.73.527L25 29H7a3.982 3.982 0 0 1-2-.535V31H3V18H1v-2h5v-4a1 1 0 0 1 .883-.993L7 11h.238L6.086 8.406l1.828-.812L9.427 11H12a1 1 0 0 1 .993.883L13 12v4h10v-5h-3a1 1 0 0 1-.987-1.162l.025-.113 2-7a1 1 0 0 1 .842-.718L22 2h4zm1 16H5v7a2 2 0 0 0 1.697 1.977l.154.018L7 27h18a2 2 0 0 0 1.995-1.85L27 25v-7zm-16-5H8v3h3v-3zm14.245-9h-2.491l-1.429 5h5.349l-1.429-5z"></path></svg>`
            },
            {
                "name": "Dryer",
                "slug": "dryer",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M28 2a2 2 0 0 1 1.995 1.85L30 4v24a2 2 0 0 1-1.85 1.995L28 30H4a2 2 0 0 1-1.995-1.85L2 28V4a2 2 0 0 1 1.85-1.995L4 2zm0 2H4v24h24zM16 7a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm-4.795 5.579a6.948 6.948 0 0 1 3.675 1.755l.462.444a8.968 8.968 0 0 0 4.614 2.28 5.017 5.017 0 0 1-2.01 1.55 10.978 10.978 0 0 1-4.255-2.644 4.962 4.962 0 0 0-2.656-1.388 5.001 5.001 0 0 1 .17-1.998zm3.08-3.277a10.96 10.96 0 0 1 3.649 2.419 4.974 4.974 0 0 0 2.995 1.436 4.99 4.99 0 0 1-.064 2.002 6.967 6.967 0 0 1-4.12-1.807l-.462-.445a8.955 8.955 0 0 0-4.07-2.17 5.002 5.002 0 0 1 2.072-1.435zM7 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>`
            },
            {
                "name": "Microwave",
                "slug": "microwave",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M29 3a2 2 0 0 1 1.995 1.85L31 5v22a2 2 0 0 1-1.85 1.995L29 29H3a2 2 0 0 1-1.995-1.85L1 27V5a2 2 0 0 1 1.85-1.995L3 3zm0 2H3v22h26zm-6 2v18H5V7zm-2 2H7v14l3 .001a4.975 4.975 0 0 1-.992-2.721L9 20v-3h10v3a4.978 4.978 0 0 1-1 3.001L21 23zm-4 10h-6v1a3 3 0 0 0 2.65 2.98l.174.015L14 23a3 3 0 0 0 2.995-2.824L17 20zm9-8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>`
            },
            {
                "name": "Garden",
                "slug": "garden",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M16 1a5 5 0 0 1 5 5 5 5 0 0 1 0 10 5.002 5.002 0 0 1-4 4.9v4.287C18.652 23.224 21.153 22 23.95 22a8.94 8.94 0 0 1 3.737.814l.313.15.002 2.328A6.963 6.963 0 0 0 23.95 24c-3.542 0-6.453 2.489-6.93 5.869l-.02.15-.006.098a1 1 0 0 1-.876.876L16 31a1 1 0 0 1-.974-.77l-.02-.124C14.635 26.623 11.615 24 7.972 24a6.963 6.963 0 0 0-3.97 1.234l.002-2.314c1.218-.6 2.57-.92 3.968-.92 2.818 0 5.358 1.24 7.028 3.224V20.9a5.002 5.002 0 0 1-3.995-4.683L11 16l-.217-.005a5 5 0 0 1 0-9.99L11 6l.005-.217A5 5 0 0 1 16 1zm2.864 14.1c-.811.567-1.799.9-2.864.9s-2.053-.333-2.864-.9l-.062.232a3 3 0 1 0 5.851.001zM11 8a3 3 0 1 0 .667 5.926l.234-.062A4.977 4.977 0 0 1 11 11c0-1.065.333-2.053.9-2.864l-.232-.062A3.013 3.013 0 0 0 11 8zm10 0c-.228 0-.45.025-.667.074l-.234.062C20.667 8.947 21 9.935 21 11a4.977 4.977 0 0 1-.9 2.864l.232.062A3 3 0 1 0 21 8zm-5 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-5a3 3 0 0 0-2.926 3.667l.062.234C13.947 6.333 14.935 6 16 6s2.053.333 2.864.9l.062-.232A3 3 0 0 0 16 3z"></path></svg>`
            },
            {
                "name": "Gym",
                "slug": "gym",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M10 5a2 2 0 0 1 1.995 1.85L12 7v8h8V7a2 2 0 0 1 1.85-1.995L22 5h2a2 2 0 0 1 1.995 1.85L26 7v2h2a2 2 0 0 1 1.995 1.85L30 11v4h2v2h-2v4a2 2 0 0 1-1.85 1.995L28 23h-2v2a2 2 0 0 1-1.85 1.995L24 27h-2a2 2 0 0 1-1.995-1.85L20 25v-8h-8v8a2 2 0 0 1-1.85 1.995L10 27H8a2 2 0 0 1-1.995-1.85L6 25v-2H4a2 2 0 0 1-1.995-1.85L2 21v-4H0v-2h2v-4a2 2 0 0 1 1.85-1.995L4 9h2V7a2 2 0 0 1 1.85-1.995L8 5zm14 2h-2v18h2zM10 7H8v18h2zm18 4h-2v10h2zM6 11H4v10h2z"></path></svg>`
            },
            {
                "name": "Fire extinguisher",
                "slug": "fire-extinguisher",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M7 28H5V15c0-4.997 3.356-9.304 8.061-10.603A3 3 0 0 1 17.69 2.52l2.66-2.28 1.302 1.52L19.036 4H23v2h-4.17A3.008 3.008 0 0 1 17 7.83l.001.242a7.007 7.007 0 0 1 5.982 6.446l.013.24L23 15v15a2 2 0 0 1-1.85 1.995L21 32H11a2 2 0 0 1-1.995-1.85L9 30v-6H7zm9-18c-2.617 0-4.775 2.014-4.983 4.573l-.013.22L11 15v15h10V15.018l-.003-.206A5 5 0 0 0 16 10zm-2.654-3.6a9.002 9.002 0 0 0-6.342 8.327L7 15v7h2v-7.018l.005-.244A7.001 7.001 0 0 1 15 8.071v-.242a3.01 3.01 0 0 1-1.654-1.43zM16 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>`
            },
            {
                "name": "Building staff",
                "slug": "building-staff",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M21 3a2 2 0 0 1 1.995 1.85L23 5v7a6.996 6.996 0 0 1-2.226 5.12l-.2.181-.023.018.28.108a13.014 13.014 0 0 1 8.083 10.574h-2.016c-.634-4.631-4.16-8.401-8.789-9.298l-.109-.02.001-2.1a5.003 5.003 0 0 0 2.978-4.128l.016-.227L21 12l-.001-3h-10L11 12a5 5 0 0 0 3 4.583v2.098a10.922 10.922 0 0 0-3.001 1.017L11 28H9v-6.987a11.009 11.009 0 0 0-3.898 6.988L3.086 28a13.018 13.018 0 0 1 7.795-10.455l.288-.119.279-.109-.232-.206a6.995 6.995 0 0 1-2.193-4.543l-.018-.296L9 12V5a2 2 0 0 1 1.85-1.995L11 3zm-3 23a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7-17H11l-.001 2h10z"></path></svg>`
            },
            {
                "name": "Pets allowed",
                "slug": "pets-allowed",
                "icon": `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M13.693 13.934a4 4 0 0 1 5.283.595l.292.366 4.768 6.755a4 4 0 0 1 .596 3.342 4.004 4.004 0 0 1-4.496 2.913l-.403-.084-3.474-.932a1 1 0 0 0-.518 0l-3.474.932a4 4 0 0 1-2.941-.347l-.401-.249a4.004 4.004 0 0 1-1.19-5.207l.229-.368 4.768-6.755a4 4 0 0 1 .961-.96zm3.756 1.889a2 2 0 0 0-2.979.09l-.104.136-4.838 6.861a2 2 0 0 0 2.048 3.017l.173-.038 3.992-1.07a1 1 0 0 1 .518 0l3.964 1.063.143.034a2 2 0 0 0 2.132-2.963l-4.947-7.014zM27 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM5 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm22 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6-10a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM11 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></svg>`
            },
        ];

        res.json({
            responseCode: 200,
            message: "Amenities fetched successfully!",
            data: hotelamenities
        });

    },

    async getAmenityByName(req, res, next) {

        let queryParams = req.query;
        let keys = Object.keys(queryParams);

        var i = keys.length;
        let filteredDataList = [];
        while (i--) {
            let filteredData = await utility.getDataByAttribute(amenities, keys[i], queryParams[keys[i]]);
            filteredDataList.push(filteredData);
        }
        // filteredDataList = await utility.getUniqueListBy(filteredDataList, 'name');
        res.json({
            responseCode: 200,
            message: !filteredDataList ? "Data not found!" : "Amenity fetched successfully!",
            ...(filteredDataList && { data: filteredDataList }),
        });

    },

    async getCities(req, res, next) {
        res.json({
            responseCode: 200,
            message: "Cities fetched successfully!",
            data: cities,
        });

    },

    async getHotelList(req, res, next) {
        res.json({
            responseCode: 200,
            message: "Hotel List fetched successfully!",
            data: hotellist,
        });
    },

    async getHotelDetails(req, res, next) {
        res.json({
            responseCode: 200,
            message: "Hotel Details fetched successfully!",
            data: hotelsdetails,
        });
    },

    async getLandingPageDetails(req, res, next) {
        res.json({
            responseCode: 200,
            message: "Landing Page fetched successfully!",
            data: landingpage,
        });
    },

    async getPopularHotels(req, res, next) {
        res.json({
            responseCode: 200,
            message: "Popular Hotels fetched successfully!",
            data: popularhotels,
        });
    },

    async getRoomAmenities(req, res, next) {
        res.json({
            responseCode: 200,
            message: "Room Amenities fetched successfully!",
            data: roomamenities,
        });
    }
}

export default staticDataController;