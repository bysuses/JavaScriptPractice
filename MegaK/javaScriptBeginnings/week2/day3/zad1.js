const obj = {
    id: 1,
    name: 'Tester Testowy',
    pwdHash: 'abcdef1749cdfrthsrtyrth75463',
    isAdmin: true,
    hasAvatar: true,
};

function filter(obj) {
    const { id, name, hasAvatar, } = obj;
    return { id: id, name: name, hasAvatar: hasAvatar, };
}

console.log(filter(obj));
