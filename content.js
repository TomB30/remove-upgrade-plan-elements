function removeBlocks() {
  // Remove ads
  const ads = document.querySelectorAll("[class^=NodeArtboardstyles__Inaccessible]");
  ads.forEach((ad) => ad.remove());
}

function observeDOMChanges() {
  const targetNode = document.body; // Observe the entire body or a specific container
  const config = { childList: true, subtree: true, characterData: true };

  const observer = new MutationObserver((mutationsList, observer) => {
    removeBlocks();
  });

  observer.observe(targetNode, config); // Start observing
}

function runScript() {
  removeBlocks(); // Remove ads from the initial page load
  observeDOMChanges(); // Start observing for future changes
}

// Check if the document is already loaded
if (document.readyState === "loading") {
  // DOM hasn't loaded yet, wait for DOMContentLoaded
  document.addEventListener("DOMContentLoaded", function () {
    runScript();
  });
} else {
  // DOM is already loaded, run the script immediately
  runScript();
}
