const regexDictionary = {
    onlyLetters: /^[a-zA-Z ]*$/,
    spanishOnyLetters: /^[a-zA-Z _áÁéÉíÍóÓúÚñÑ]*$/,
    noNumbers: /^([^0-9])/,
    email: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/,
    length: (min = 0, max = Infinity) => `(?=\\S+$).{${min},${max}}$`,
    passwordRegex: {
        overAllRegex: '(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,20}',
        containNumbers: /[0-9]/g,
        containLetters: /(?=.*[a-z])(?=.*[A-Z])/
    },
    onlyIntegerNumbers: /^[0-9]*$/,
    onlyDecimalNumbers: /^(\d*\.)?\d+$/,
    rfc: /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/,
    hexColor: /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i,
}

export default regexDictionary