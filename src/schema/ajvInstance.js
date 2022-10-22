const Ajv = require("ajv")
const addFormats = require("ajv-formats")

const ajvInstace = new Ajv({allErrors: true});
addFormats(ajvInstace)

module.exports = ajvInstace