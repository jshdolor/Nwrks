export default class RequestObject {

    getObject() {

        let keys = Object.keys(this),
            obj = {},
            trueKey;

        if(keys.length > 0) {

            keys.forEach((namespace) => {

                trueKey = namespace.startsWith('_') > -1 ? namespace.substr(1) : namespace;
                obj[trueKey] = this[namespace] ? this[namespace] : '';

            });

        }

        return obj;

    }
}