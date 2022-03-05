import moment from "moment";

const dateFormat = "MM-DD-YYYY HH:mm:ss";

const getCurrentDate = () => {
    let date = moment().utc().format(dateFormat);
    return date;
}

const convertUTC = (date) => {
    let userDate = new Date(date); // MM/DD/YYY
    let getMonth = userDate.getMonth() + 1;
    let getDay = userDate.getDate() + 1;
    let getYear = userDate.getFullYear();
    let cdate = new Date(`${getMonth}/${getDay}/${getYear}`)
    let convertDate = moment(cdate).utc().format(dateFormat);
    return convertDate;
}

const getDataByAttribute = (array, attribute, value) => {
    var index = array.findIndex(x => x[attribute] === value);
    return array[index];
}

const removeByAttribute = (array, attribute, value) => {
    var i = array.length;
    while (i--) {
        if (array[i]
            && array[i].hasOwnProperty(attribute)
            && (arguments.length > 2 && array[i][attribute] === value)
        ) {
            array.splice(i, 1);
        }
    }
    return array;
}

const getUniqueListBy = (arr, key) => {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

export default {
    getCurrentDate,
    convertUTC,
    getDataByAttribute,
    removeByAttribute,
    getUniqueListBy
}