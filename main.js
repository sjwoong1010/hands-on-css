// $(document).ready(function(){
//     $('.header').height($(window).height())
// });

window.onresize = window.onload = function() {
    document.getElementById('header').style.height = this.innerHeight + 'px';
}