/**
* Author: Md Hasanuzzaman
* Email: webhasan24@gmail.com
* Linkedin: https://linkedin.com/md-h
* Version: 1.0.0
*/

(function() {
    var isAdsArea = false;
    var ad_link = '';
    var page_link = window.location.href;

    document.addEventListener('mouseover', function (e) {
        var target = e.target.closest('iframe[src^="https://googleads.g.doubleclick.net"]');
        var target2 = e.target.closest('iframe[src$="/html/container.html"]');

        if(target) {
            isAdsArea = true;
            ad_link = target.getAttribute('src');
        }else if(target2) {
            isAdsArea = true;
            ad_link = target2.getAttribute('src'); 
        }
        else {
            isAdsArea = false;
            ad_link = '';
        }
    });

    window.addEventListener('blur', function () {
        if(isAdsArea) {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'adsense_ad_click',
                'ad_link': ad_link,
                'ad_location': page_link
            })
        }
    });
})();
