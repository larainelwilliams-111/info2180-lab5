window.addEventListener('DOMContentLoaded', function () {
    var countryInput = document.getElementById('country');
    var result = document.getElementById('result');

    function search(lookupType) {
        var country = encodeURIComponent(countryInput.value.trim());
        var url = 'world.php?country=' + country;
        if (lookupType === 'cities') {
            url += '&lookup=cities';
        }

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    result.innerHTML = xhr.responseText;
                } else {
                    result.innerHTML = '<p class="error">Unable to retrieve data (status ' + xhr.status + ').</p>';
                }
            }
        };
        xhr.open('GET', url, true);
        xhr.send();
    }

    document.getElementById('lookup').addEventListener('click', function () {
        search('country');
    });
    document.getElementById('lookup-cities').addEventListener('click', function () {
        search('cities');
    });
});
