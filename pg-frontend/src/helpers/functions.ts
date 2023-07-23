export const firstLetterUppercase = (text: string) => {
    const str1 = text.slice(0, 1).toLocaleUpperCase();
    const str2 = text.slice(1);
    return str1.concat(str2);
}