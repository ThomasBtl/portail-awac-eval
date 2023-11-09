/**
 * This function check if a node is in the view of the user.
 * @param node The node to check.
 * @param params 
 * @returns An observable.
 */
function inView(node, params: {root?:string, threshold?: number} = {}) {
    let observer: IntersectionObserver;

    const handleIntersect = (e) => {
        const v = e[0].isIntersecting ? "enter" : "exit";
        node.dispatchEvent(new CustomEvent(v));
    }

    const setObserver = ({ root, threshold }) => {
        const options = { root, threshold };
        if (observer) {
            observer.disconnect();
        }

        observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(node);
    }

    setObserver(params)

    return {
        update(params) {
            setObserver(params);
        },

        destroy() {
            if (observer) {
                observer.disconnect();
            }
        }
    };
}

function updateContent(container, municipalityName, content) {
    if (container) {
        [...container.getElementsByClassName('municipality-name')].forEach((node) => node.innerHTML = municipalityName)

        for (const [className, value] of Object.entries(content)) {
            [...container.getElementsByClassName(className)].forEach((node) => node.innerHTML = Number(Number(value).toFixed(2)).toLocaleString("fr-FR"))
        }
    }
}

export {
    inView,
    updateContent
}