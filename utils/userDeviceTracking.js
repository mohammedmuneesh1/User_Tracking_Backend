const useragent = require('express-useragent');

const UserDeviceTracking = (req) => {

    const deviceInfo = {
        deviceType: req.useragent.isMobile ? 'mobile' : req.useragent.isTablet ? 'tablet' : 'desktop',
        browser: req.useragent.browser,
        os: req.useragent.os,
        platform: req.useragent.platform,
        };
        return deviceInfo;
        // console.log(deviceInfo);

}


module.exports={UserDeviceTracking}