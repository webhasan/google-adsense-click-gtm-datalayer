/**
* Author: Md Hasanuzzaman
* Email: webhasan24@gmail.com
* Linkedin: https://linkedin.com/md-h
* Version: 1.0.0
*/

(function() {
    var isAdsArea = false;
    var add_link = '';
    var page_link = window.location.href;

    document.addEventListener('mouseover', function (e) {
        var target = e.target.closest('iframe[src^="https://googleads.g.doubleclick.net"]');
        var target2 = e.target.closest('iframe[src$="/html/container.html"]');

        if(target) {
            isAdsArea = true;
            ads_link = target.getAttribute('src');
        }else if(target2) {
            isAdsArea = true;
            ads_link = target2.getAttribute('src'); 
        }
        else {
            isAdsArea = false;
            ads_link = '';
        }
    });

    window.addEventListener('blur', function () {
        if(isAdsArea) {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'adsense_ads_click',
                'ads_link': ads_link,
                'ads_location': page_link
            })
        }
    });
})();
