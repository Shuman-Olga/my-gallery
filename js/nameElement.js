
export function nameElement(src, div) {
    const p = document.createElement('p')
    div.appendChild(p)
    let name = src.split("/").pop();
    p.innerHTML = name.split('.')[0]
}