(function() {
    var isAdsArea = false;
    var add_link = '';
    var page_link = window.location.href;

    document.addEventListener('mouseover', function (e) {
        var target = e.target.closest('iframe[src^="https://googleads.g.doubleclick.net"]');
        var target2 = e.target.closest('iframe[src$="/html/container.html"]');

        if(target) {
            isAdsArea = true;
            add_link = target.getAttribute('src');
        }else if(target2) {
            isAdsArea = true;
            add_link = target2.getAttribute('src'); 
        }
        else {
            isAdsArea = false;
            add_link = '';
        }
    });

    window.addEventListener('blur', function () {
        if(isAdsArea) {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'ads_click',
                'add_link': add_link,
                'page_link': page_link
            })
        }
    });
})();
