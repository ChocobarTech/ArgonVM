function spawnVM(id, name, isoFile, vga, bios) {
    const spawnTarget = new Tab(id, name);
    const runtimeContainer = document.createElement('div');
    const machineController = document.createElement('div');
    const machineView = document.createElement('div');
    const stopAndClose = document.createElement('div');
    stopAndClose.className = 'machine-actions'
    stopAndClose.title = 'Stop and close'
    stopAndClose.innerHTML = '<i class="icon ic_fluent_checkmark_square_24_regular"></i>'
    machineView.className = 'machine-viewer';
    machineController.innerHTML = `
        <div class="machine-actions" title="Reset"><i class="icon ic_fluent_arrow_clockwise_20_regular"></i></div>
    `;

    stopAndClose.onclick = () => {
        spawnTarget.destroy()
    }
    machineController.appendChild(stopAndClose)
    runtimeContainer.appendChild(machineController);
    runtimeContainer.appendChild(machineView);

    // Use the 'main-body' element directly by its ID
    const mainBody = document.getElementById('main-body');

    if (mainBody) {
        spawnTarget.buildDiv(runtimeContainer, mainBody);
    } else {
        console.error("Element with ID 'main-body' not found.");
    }
}