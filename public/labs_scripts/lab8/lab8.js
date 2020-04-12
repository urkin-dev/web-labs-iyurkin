let 
    addParentBtn    = document.querySelector('.add-parent'),
    addChildBtn     = document.querySelector('.add-child'),
    saveBtn         = document.querySelector('.save-btn'),
    clearBtn        = document.querySelector('.clear-btn'),
    flexWrap        = document.querySelector('.flex-container'),
    childElements   = document.querySelectorAll('.flex-container .item');

saveBtn.addEventListener('click', saveStyles);
clearBtn.onclick = function() {
    window.location.reload();
}

addParentBtn.onclick = function addProp(e) {
    let inp1 = document.createElement('input');
    let inp2 = document.createElement('input');

    let container = addParentBtn.previousElementSibling;

    container.append(inp1, inp2);
}

addChildBtn.onclick = function addProp(e) {
    let inp1 = document.createElement('input');
    let inp2 = document.createElement('input');

    let container = addChildBtn.previousElementSibling;

    container.append(inp1, inp2);
}

function saveStyles() {

    let parentStyles = {};
    let childStyles = {};

    let parentInputs = document.querySelectorAll('.parrent-prop input');
    let childInputs = document.querySelectorAll('.child-prop input');

    // Get styles for parent container
    for (let i = 0; i < parentInputs.length - 1; i += 2) {
        parentStyles[parentInputs[i].value] = parentInputs[i + 1].value;
    }

    // Get styles for childs container
    for (let i = 0; i < childInputs.length - 1; i += 2) {
        childStyles[childInputs[i].value] = childInputs[i + 1].value;
    }

    // Added requeired styles for parent container
    parentStyles.width = '70%';
    parentStyles.margin = '30px auto';
    parentStyles.display = 'flex';
    parentStyles.border = '1px solid red';
    parentStyles.padding = '20px';
    parentStyles['border-radius'] = '5px';
    parentStyles['background-color'] = '#9C27B0';
    parentStyles.height = '450px';

    // Added requeired styles for child container
    childStyles.backgroundColor = '#FFEB3B';
    childStyles.height = '100px';
    childStyles.display = 'flex';
    childStyles.justifyContent = 'center';
    childStyles.alignItems = 'center';
    childStyles.fontSize = '20px';

    let parentStyleStr = '';
    let childStyleStr = '';

    for (const style in parentStyles) {
        parentStyleStr += style + ':' + parentStyles[style] + ';';
    }

    for (const style in childStyles) {
        childStyleStr += style + ':' + childStyles[style] + ';';
    }

    flexWrap.style.cssText = parentStyleStr;

    childElements[0].style.cssText = childStyleStr;

    childElements[1].style.cssText = childStyleStr;

    childElements[2].style.cssText = childStyleStr;
}