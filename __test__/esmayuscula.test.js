const isUpperCase = require('../utils/esmayuscula') ;
test("Comprobar si es mayuscula", () => {
    expect(esmayuscula("MADRID")).toBe(true)
})

test("Comprobar si es no mayuscula", () => {
    expect(esmayuscula("MadRiD")).toBe(false)
})

test("Comprobar si es no mayuscula", () => {
    expect(esmayuscula("madrid")).toBe(false)
})
