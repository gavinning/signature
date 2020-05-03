module.exports = (obj, arr) => {
    const tmp = {}
    for (let key in obj) {
        if (!arr.includes(key)) {
            tmp[key] = obj[key]
        }
    }
    return tmp
}
