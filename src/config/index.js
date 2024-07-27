const devSite = require('../config/dev');
const prodSite = require('../config/prod');
const uatSite = require('../config/uat');

const _config = {
    development:devSite,
    production:prodSite,
    uat:uatSite
 
} 



export default Object.freeze(Object.assign({}, _config[process.env.REACT_APP_START_PROJECT].default));