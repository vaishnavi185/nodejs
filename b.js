// b.js
function myDateTime() {
    const currentDate = new Date();
    const date = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate();
    const time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    return date + ' ' + time;
}
module.exports.myDateTime = myDateTime;