let required = (text) => {
    return text ? true : false;
}

let mobile_format = (text) => {
    let pattern = /^(091)\d{1} {1}\d{3} {1}\d{4}$$/;
    return pattern.test(text);
} 


let getErrorMessage = (rule) => {
    let rules = {
        required: 'This field is required.',
        mobile_format: 'This field should follow 091X XXX XXXX format.'
    }
    return rules[rule];
} 

export default {
    required,
    mobile_format,
    getErrorMessage
}