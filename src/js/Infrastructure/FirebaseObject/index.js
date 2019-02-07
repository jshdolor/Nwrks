export default class RequestObject {

    getObject(excluded) {

        let keys = Object.keys(this),
            obj = {},
            trueKey;

        if(keys.length > 0) {

            keys.forEach((namespace) => {

                trueKey = namespace.startsWith('_') > -1 ? namespace.substr(1) : namespace;
                if((excluded || []).indexOf(trueKey) > -1)
                {
                    return true;
                }
                obj[trueKey] = this[namespace] ? this[namespace] : '';

            });

        }

        return obj;

    }
}