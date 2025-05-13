// Find All Theme Toggle Buttons
const toggle = document.querySelectorAll('.button-toggle-theme');
const toggleDark = document.querySelectorAll('.button-toggle-theme.dark'); 
const toggleLight = document.querySelectorAll('.button-toggle-theme.light');

// Apply Dark Mode
function applyDarkMode () {
    // Get All Elements as node
    const allElements = document.querySelectorAll('*');

    // Loop through each node
    allElements.forEach(element => {
        element.classList.add('darkmode');
    })
};

// Remove Dark Mode
function removeDarkMode () {
    // Get All Elements as node
    const allElements = document.querySelectorAll('*');
    
    // Loop through each node
    allElements.forEach(element => {
        element.classList.remove('darkmode');
    })
}

// Switch Assets to Light, taget class name "dynamic-asset", support both src and srcset
function switchAssetToLight () {
    // Select all image and video elements
    const dynamicAssets = document.querySelectorAll('.dynamic-asset');

    // Switch the 'src' attribute to the light asset
    dynamicAssets.forEach(asset => {
        const lightAsset = asset.getAttribute('data-asset-light');
        asset.setAttribute('src', lightAsset);
        asset.setAttribute('srcset', lightAsset);
    });

    // Poster for card-thumbnail video elements
    const thumbnailVideos = document.querySelectorAll('.card-thumbnail video');

    thumbnailVideos.forEach(video => {
        const lightPoster = video.getAttribute('data-poster-light');
        if (lightPoster) {
            video.setAttribute('poster', lightPoster);
        }
        else {
            video.removeAttribute('poster')
        }
    })
}

// Switch Assets to Dark, taget class name "dynamic-asset", support both src and srcset
function switchAssetToDark () {
    // Select all image and video elements
    const dynamicAssets = document.querySelectorAll('.dynamic-asset');

    // Switch the 'src' attribute to the dark asset
    dynamicAssets.forEach(asset => {
        const darkAsset = asset.getAttribute('data-asset-dark');
        asset.setAttribute('src', darkAsset);
        asset.setAttribute('srcset', darkAsset);
    });

    // Poster for card-thumbnail video elements
    const thumbnailVideos = document.querySelectorAll('.card-thumbnail video');

    thumbnailVideos.forEach(video => {
        const darkPoster = video.getAttribute('data-poster-dark');
        if (darkPoster) {
            video.setAttribute('poster', darkPoster);
        }
        else {
            video.removeAttribute('poster')
        }
    })
}


// Hide and Show button
function hideButton (buttonName) {
    buttonName.forEach(button => {
        button.style.display = 'none'});
}

function showButton (buttonName) {
    buttonName.forEach(button => {
        button.style.display = 'flex'});
}

// Find saved darkmode in localStorage upon DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('darkmode');

    // If darkmode was saved, apply darkmode automatically
    if (isDarkMode === 'enabled') {
        applyDarkMode();
        switchAssetToDark();
        console.log('Dark Mode applied');
        // Hide dark button
        hideButton(toggleDark);
        // Show light button
        showButton(toggleLight);
    } else {
        switchAssetToLight();      
        // Hide dark button
        hideButton(toggleLight);
        // Show light button
        showButton(toggleDark);
    }
})

// Get all toggle buttons and loop through each button
toggle.forEach(button => {

    button.addEventListener('click', () => {
        // Get darkmode saved
        const isDarkMode = localStorage.getItem('darkmode');

        if (isDarkMode === 'enabled') {
            removeDarkMode();
            switchAssetToLight();
            localStorage.setItem('darkmode', 'disabled');

            // Hide turn on light mode button
            hideButton(toggleLight);
            // Hide turn on dark mode button
            showButton(toggleDark);
        } else {
            applyDarkMode();
            switchAssetToDark();
            localStorage.setItem('darkmode', 'enabled');
            // Hide turn on dark mode button
            hideButton(toggleDark);
            // Show turn on light mode button
            showButton(toggleLight);
        }
    })
})