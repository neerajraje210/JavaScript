const obj = {
    js:'javaScript',
    cpp: 'C++',
    rd: 'ruby',
    swift:'swift by apple'
}

for (const key in obj) {

    console.log(`${key} shortcut is for ${obj[key]}`);
}

const arr = ["js","ruby","py","java","cpp"]

for (const key in arr) {
    console.log(arr[key]);
}


const map = new Map()
map.set('IN',"India")
map.set('FR',"France")
map.set('USA', "United state of America")
map.set('IN',"India")

for (const key in map) {

    console.log(key);
    
}