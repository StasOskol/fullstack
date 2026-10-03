// let str = "станислав олегович хочет такую штуку!"
export const encode = () => {
    debugger

    let sim = value.split('');
    let str = "";

    for (let i = 0; i < sim.length; i++) {
        for (let j = 0; j < letter.length; j++) {
            if (sim[i] == letter[j]) {
                str += num[j] + " ";
            }
        }
    }
    setValue(str);
}

export const decode = () => {

    let sim = text.split(' ');
    let str = "";


    for (let i = 0; i < sim.length; i++) {
        for (let j = 0; j < num.length; j++) {
            if (sim[i] == num[j]) {
                str += letter[j] + "";
            }
        }
    }
    setText(str);
}