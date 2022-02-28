var catalan2ipa = require("catalan2ipa")

let stuff = []
stuff.push(catalan2ipa("Valencià"))
stuff.push("Valencià")
stuff.push(catalan2ipa("Calle Doctor Pagès, 26-28"))
stuff.push("Calle Doctor Pagès, 26-28")
stuff.push(catalan2ipa("Avenida Europa, 36"))
stuff.push("Avenida Europa, 36")
stuff.push(catalan2ipa("Calle Ortigosa, 14-16"))
stuff.push("Calle Ortigosa, 14-16")


console.log(stuff)
