// تابع زیر دو پارامتر میگیرد یکی از کلاس مورد نظر برای دسترسی داشتن
// و دومی هم دسترسی به کدهای اچ تی ام ال که بوسیله بابل اچ تی ام ال لودر
// به آن دسنرسی داریم
// export const setupShadow = (element, html) => {
//     const shadow = element.attachShadow({ mode: "open" });
//     const template = document.createElement('template');
//     template.innerHTML = html;
//     const templateContent = template.content;
//     shadow.appendChild(templateContent.cloneNode(true));
// }

export const setupShadow = () => {
    const shadow = this.attachShadow({ mode: "open" });
    const template = document.querySelector("template").content;
    shadow.appendChild(template.cloneNode(true));
}