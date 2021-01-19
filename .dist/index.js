"use strict";
var btnSubmit = document.getElementById('submitbtn');
var reviewerName = document.getElementById('reviewername');
var comment = document.getElementById('comment');
var rating = document.getElementById('rating');
var template = document.getElementById('template');
var resposepoint = document.getElementById('resposepoint');
btnSubmit.addEventListener('click', (event) => {
    var reviewerNameValue = reviewerName.value;
    var commentValue = comment.value;
    var ratingValue = rating.value;
    var template = getTemplateClone('template');
    template.content.getElementById('outputname').innerText = reviewerNameValue.toString();
    template.content.getElementById('outputrating').innerText = ratingValue.toString();
    template.content.getElementById('outputcomment').innerText = commentValue.toString();
    resposepoint?.appendChild(template.content);
});
function getTemplateClone(TemplateID) {
    return document.getElementById('template')?.cloneNode(true);
}
//# sourceMappingURL=index.js.map