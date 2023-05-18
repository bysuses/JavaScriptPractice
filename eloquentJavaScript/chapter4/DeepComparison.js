function deepComparison(object1, object2) {
    if (object1 === object2) return true;                     //if values are equal return true
    if (typeof object1 !== typeof object2) return false;     //if they are of diffrent type return false
    if (!object1 || !object2) return false;                     //if one of the objects is undefined, null etc. return false
    if (typeof object1 === typeof object2 === "object") {
        let aKeys = Object.keys(object1), bKeys = Object.keys(object2);
        for (let key of aKeys) {
            if (!bKeys.includes(key) || !deepEqual(object1[key], object2[key])) return false;
        }
    }
    return true;
}