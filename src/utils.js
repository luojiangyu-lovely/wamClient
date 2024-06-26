export const translateStr = (str) => {
    let originStr = str.replace(/\\n/g, '<br/>')
    function countChar(str, charToCount) {
        return str.split(charToCount).length - 1;
    }
    function replaceCharAt(str, index, replacement) {
        if (index >= str.length) {
            return str;
        }
        return str.substring(0, index) + replacement + str.substring(index + 1);
    }
    const chars = ['#', "&", '$']
    const colorChar = [{ char: '#', startChar: '<span style="color:yellow"}>', endChar: '</span>' }, { char: '$', startChar: '<span style="color:red">', endChar: '</span>' }, { char: '&', startChar: '<span style="color:green"}>', endChar: '</span>' }]
    const colorCharNum = colorChar.map(el => {
        let num = countChar(str, el.char)
        if (num % 2 != 0) {
            num--
        }
        el.num = num
        return el
    })

    for (let i = 0; i < originStr.length; i++) {
        const char = originStr[i]
        if (chars.includes(char)) {
            let obj = colorCharNum.find(item => item.char == char)
          
            if (obj.num == 0) {
                continue
            }
            if (obj.num > 0 && obj.num % 2 == 0) {
                originStr = replaceCharAt(originStr, i, obj['startChar'])
                obj.num = obj.num - 1
            } else {
                originStr = replaceCharAt(originStr, i, obj['endChar'])
                obj.num = obj.num - 1
            }
        }
    }
    originStr = originStr.replace(/yellow/g, '#FFDA7C')
    originStr = originStr.replace(/red/g, '#F06563')
    originStr = originStr.replace(/green/g, '#68A64F')
    return originStr.slice(1, originStr.length-1)
}

export const translateStrPostR = (str) => {
    let originStr = str
    function countChar(str, charToCount) {
        return str.split(charToCount).length - 1;
    }
    function replaceCharAt(str, index, replacement) {
        if (index >= str.length) {
            return str;
        }
        return str.substring(0, index) + replacement + str.substring(index + 1);
    }
    const chars = ['#', "&", '$']
    const colorChar = [{ char: '#', startChar: `<color=yellow>`, endChar: "</color>" }, { char: '$', startChar:`<color=red>`, endChar: "</color>" }, { char: '&', startChar: `<color=green>`, endChar: "</color>" }]
    const colorCharNum = colorChar.map(el => {
        let num = countChar(str, el.char)
        if (num % 2 != 0) {
            num--
        }
        el.num = num
        return el
    })

    for (let i = 0; i < originStr.length; i++) {
        const char = originStr[i]
        if (chars.includes(char)) {
            let obj = colorCharNum.find(item => item.char == char)
          
            if (obj.num == 0) {
                continue
            }
            if (obj.num > 0 && obj.num % 2 == 0) {
                originStr = replaceCharAt(originStr, i, obj['startChar'])
                obj.num = obj.num - 1
            } else {
                originStr = replaceCharAt(originStr, i, obj['endChar'])
                obj.num = obj.num - 1
            }
        }
    }
    originStr = originStr.replace(/yellow/g, '#FFDA7C')
    originStr = originStr.replace(/red/g, '#F06563')
    originStr = originStr.replace(/green/g, '#68A64F')
    return originStr
}
export const translateStrPostN = (str) => {
    let originStr = str
    function countChar(str, charToCount) {
        return str.split(charToCount).length - 1;
    }
    function replaceCharAt(str, index, replacement) {
        if (index >= str.length) {
            return str;
        }
        return str.substring(0, index) + replacement + str.substring(index + 1);
    }
    const chars = ['#', "&", '$']
    const colorChar = [{ char: '#', startChar: `<color=yellow>`, endChar: "</color>" }, { char: '$', startChar:`<color=red>`, endChar: "</color>" }, { char: '&', startChar: `<color=green>`, endChar: "</color>" }]
    const colorCharNum = colorChar.map(el => {
        let num = countChar(str, el.char)
        if (num % 2 != 0) {
            num--
        }
        el.num = num
        return el
    })

    for (let i = 0; i < originStr.length; i++) {
        const char = originStr[i]
        if (chars.includes(char)) {
            let obj = colorCharNum.find(item => item.char == char)
          
            if (obj.num == 0) {
                continue
            }
            if (obj.num > 0 && obj.num % 2 == 0) {
                originStr = replaceCharAt(originStr, i, obj['startChar'])
                obj.num = obj.num - 1
            } else {
                originStr = replaceCharAt(originStr, i, obj['endChar'])
                obj.num = obj.num - 1
            }
        }
    }
    originStr = originStr.replace(/yellow/g, '#C68531')
    originStr = originStr.replace(/red/g, '#F06563')
    originStr = originStr.replace(/green/g, '#68A64F')
    return originStr
}