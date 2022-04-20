function applyTranslation(obj?: Object){

    if (obj && !obj.hasOwnProperty("language")){
        return {...obj, language: "en-US"}            
    }

    return obj

}

describe("applyTranslation", () => {

    test("correctly with no language property", () => {

        expect(applyTranslation({})).toMatchObject({ language: "en-US" })

    })

    test("correctly with language property", () => {

        expect(applyTranslation({language: "de-DE"})).toMatchObject({ language: "de-DE" })

    })

    test("correctly returns undefined when given no object", () => {
        expect(applyTranslation()).toBeUndefined()
    })

})