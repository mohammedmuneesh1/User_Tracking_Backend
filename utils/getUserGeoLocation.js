const axios = require("axios")

const getUserGeoLocation =async (req)=>{

    const userIpAddress=  '137.59.87.252';
    //  const userIpAddress = (req.headers['x-forwarded-for'] || req.socket.remoteAddress).split(',')[0];
    const apiKey = process.env.GEOLOCATION_API_KEY ;
    let geoLocation ={};

    
    // Regular expressions for IPv4 and IPv6
    const ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/;
    const ipv6Pattern = /^([a-f0-9:]+:+)+[a-f0-9]+$/i;
    if(ipv4Pattern.test(userIpAddress) || ipv6Pattern.test(userIpAddress) ){
          const result = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${userIpAddress}`).then(res=>res.data);

          result?.ip &&(geoLocation.idAddress = result?.ip) //good
          result?.country_code3 &&( geoLocation.countryCode = result?.country_code3); //good
          result?.country_name &&( geoLocation.country = result?.country_name); //good
          result?.state_prov &&( geoLocation.state = result?.state_prov) //good
          result?.district &&( geoLocation.district = result?.district)//good
          result?.city &&( geoLocation.city = result?.city)//good
          result?.zipcode &&( geoLocation.zipcode = result?.zipcode)
          result?.latitude &&( geoLocation.latitude = result?.latitude) //good
          result?.longitude &&( geoLocation.longitude = result?.longitude) //good
          result?.calling_code &&( geoLocation.calling_code = result?.calling_code)//good
          result?.isp &&( geoLocation.isp = result?.isp) //googd
          result?.organization  &&( geoLocation.ispOrganization = result?.organization) //good
          result?.time_zone &&( geoLocation.time_zone = result?.time_zone?.name)//good
        }; 


        return Object?.keys(geoLocation).length > 0 ? geoLocation : null;
}


module.exports = {getUserGeoLocation}





// # Get geolocation for an IPv4 IP Address = 8.8.8.8
// $ curl 'https://api.ipgeolocation.io/ipgeo?apiKey=API_KEY&ip=8.8.8.8'

// # Get geolocation for an IPv6 IP Address = 2001:4860:4860::1
// $ curl 'https://api.ipgeolocation.io/ipgeo?apiKey=API_KEY&ip=2001:4860:4860::1'