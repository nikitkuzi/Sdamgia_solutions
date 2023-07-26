function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// open all hidden solutions and scroll back to the top
function openAll(){
    var solutions = document.querySelectorAll('[id^=solsb]')
    solutions.forEach(function(sol) {
        sol.children[0].click()
    })
    window.scroll(0,0)
}

// scroll to the bottom of dynamic div
async function scrollAllHidden() {
    var target = document.querySelector('.prob_list');
    // create an observer instance
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            window.scroll(0, document.body.scrollHeight)
        });
    });

    // configuration of the observer:
    var config = { attributes: true, childList: true, characterData: true }

    // pass in the target node, as well as the observer options
    observer.observe(target, config);

    //trigger scrolling
    window.scroll(0, document.body.scrollHeight)

    await sleep(5000)
    openAll()
}

scrollAllHidden()