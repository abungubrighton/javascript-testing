function fetchData(callBackFunction) {
    setTimeout(() => {
        callBackFunction("Peanut butter");
    })
}
module.exports = {
    fetchData
}