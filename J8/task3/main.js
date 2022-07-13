//                   Count IP Addresses
// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them
//  (including the first one, excluding the last one). All inputs will be valid IPv4 addresses in the form of strings.
// The last address will always be greater than the first one.
// Examples: ipsBetween("10.0.0.0", "10.0.0.50") === 50
// ipsBetween("10.0.0.0", "10.0.1.0") === 256
// ipsBetween("20.0.0.10", "20.0.1.0") === 246
function ipsBetween(start, end) {
    start = start.split('.');
    return end.split('.').reduce(function(sum, x, i) {
        return (sum << 8) + Number(x) - Number(start[i]);
    }, 0);
}

function ipsBetween(start, end) {
    function val(ip){return ip.split('.').reduce(function(tot,cur,i) {
        return tot+cur*Math.pow(256,3-i)}, 0);
    }
        return val(end)-val(start);
}
function ipsBetween(start, end) {
    return ipToInt32(end) - ipToInt32(start);
}

function ipToInt32(ip) {
    return parseInt(ip.split('.').map(function(v) {
        let bin = parseInt(v).toString(2);
        return new Array(9 - bin.length).join('0') + bin;
    }).join(''), 2);
}
console.log(ipsBetween("10.0.0.0", "10.0.0.50"));
console.log(ipsBetween("10.0.0.0", "10.0.1.0"));
console.log(ipsBetween("20.0.0.10", "20.0.1.0"));
