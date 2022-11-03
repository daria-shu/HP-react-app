const link = 'http://ip-api.com/json/';
const as = document.getElementById('as');
const city = document.getElementById('city');
const country = document.getElementById('country');
const countryCode = document.getElementById('countryCode');
const isp = document.getElementById('isp');
const lat = document.getElementById('lat');
const lon = document.getElementById('lon');
const org = document.getElementById('org');
const query = document.getElementById('query');
const region = document.getElementById('region');
const regionName = document.getElementById('regionName');
const status = document.getElementById('status');
const timezone = document.getElementById('timezone');
const zip = document.getElementById('zip');
const GeoImg = document.getElementById('GeoImg');



fetch(link)
    .then(r => r.json())
    .then(d => {
    as.innerText = d.as;
    city.innerText = d.city;
    country.innerText = d.country;
    countryCode.innerText = d.countryCode;
    lat.innerText = d.lat;
    lon.innerText = d.lon;
    query.innerText = d.query;
    region.innerText = d.region;
    regionName.innerText = d.regionName;
    status.innerText = d.status;
    timezone.innerText = d.timezone;
    zip.innerText = d.zip;
    isp.innerText = d.isp;
    org.innerText = d.org;
});

