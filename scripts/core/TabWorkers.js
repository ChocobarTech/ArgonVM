let previousTab; // variable to track the previous tab

function alterTab(e, menu) {
    var tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("container");

    for (let i = 0; i < tabcontent.length; i++) {
        if (tabcontent[i].style.display === "block") {
            previousTab = tabcontent[i];
            previousTab.style.display = "none"; // Hide the previous tab
        }
    }

    tablinks = document.getElementsByClassName("tabs");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab and set the class to 'active'
    document.getElementById(menu).style.display = "block";
    document.getElementById(menu + '-tab').className += " active";
}

alterTab(event, 'home')
const tabCont = document.getElementById('tabs-container');
const apiCont = document.getElementById('main-body');

class Tab {
    constructor(divId, title) {
        this.divId = divId;
        this.title = title;
        let tab = document.createElement('div');
        let terminateButton = document.createElement('div');
        tab.title = title;
        terminateButton.className = 'terminate-button';
        terminateButton.innerHTML = '<i class="icon ic_fluent_dismiss_24_regular"></i>';
        tab.className = 'tabs';
        tab.id = `${this.divId}-tab`;
        tab.setAttribute("onclick", `alterTab(event, '${this.divId}')`);
        tab.innerHTML = `<i class="icon ic_fluent_save_24_regular"></i>&nbsp;${title}&nbsp;`;
        tab.appendChild(terminateButton);
        tabCont.appendChild(tab);

        this.buildDiv = function (inner, apiCont) {
            let container = document.createElement('div');
            container.id = this.divId;
            container.className = 'container';
            container.appendChild(inner);
            if (apiCont) {
                apiCont.appendChild(container);
            } else {
                console.error('apiCont is not defined or null');
            }
        };
    }
}

// Extend the Tab class prototype to include the destroy function
Tab.prototype.destroy = function () {
    const container = document.getElementById(this.divId);
    if (container) {
        container.remove(); // Remove the container

        // Find and remove the tab element
        const tabElement = document.getElementById(`${this.divId}-tab`);
        if (tabElement) {
            tabElement.remove();
        } else {
            console.error('Tab Element not found');
        }

        alterTab(event, 'home')
    } else {
        console.error('Container not found');
    }
};

