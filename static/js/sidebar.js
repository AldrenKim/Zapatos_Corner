const navSlide = () => {
    const burger= document.querySelector('.burger');
    const table = document.querySelector('.container');
    const nav = document.querySelector('.nav-links');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        table.classList.toggle('container-active');
     //   burger.style.display="none";
    });
}

navSlide();

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
});



$(document).ready(function(){
    $.fn.dataTable.ext.search.push(
    function (settings, data, dataIndex) {
        var min = $('#min').datepicker("getDate");
        var max = $('#max').datepicker("getDate");
        var startDate = new Date(data[4]);
        if (min == null && max == null) { return true; }
        if (min == null && startDate <= max) { return true;}
        if(max == null && startDate >= min) {return true;}
        if (startDate <= max && startDate >= min) { return true; }
        return false;
    });
});



$(document).ready(function() {
    var table = $('#example').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'excelHtml5'
        ]
    });

    $("#min").datepicker({ onSelect: function () { table.draw(); }, changeMonth: true, changeYear: true });
    $("#max").datepicker({ onSelect: function () { table.draw(); }, changeMonth: true, changeYear: true });

    $('#min, #max').change(function () {
        table.draw();
    });
} );



