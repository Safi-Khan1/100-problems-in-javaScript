function check(word) {
    if (word === word.toUpperCase()) {
        console.log(`The given word is Uppercase ${word}`)
    }
    else {
        console.log(`The given letter is lower case : ${word}`)

    }
    return word

}
check(`i`)