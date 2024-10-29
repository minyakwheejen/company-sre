//index pre loader
    // Simulate loading progress
function simulateLoading() {
        let progressBar = document.getElementById('bar');
        let loadingGif = document.querySelector('.rotated');
        let progress = 0;
        let interval = setInterval(function () {
            if (progress < 100) {
                progress += 3;
                progressBar.style.width = progress + '%';
                // loadingGif.style.transform = 'translateX(' + progress + '%)';
            } else {
                clearInterval(interval);
                // Hide preloader when loading is complete
                document.getElementById('preloader').style.display = 'none';
            }
        }, 50);
}
    // Call the loading simulation function
simulateLoading();
    //ends