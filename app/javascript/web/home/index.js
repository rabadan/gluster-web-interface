function draw_datatable(){
    $('#file_manager_table').dataTable( {
        "bSort": false,
        initComplete: function(){
            $('#file_manager_table_filter').detach().appendTo("#file_manager_title_div").css({
                'width':'250px'
            });
            $('#file_manager_table_length').detach().appendTo("#file_manager_title_div").css({
                'width':'150px',
                'float':'right'
            });
            $('#file_manager_title_div').css({
                'width':'100%',
                'height':'48px',
            });
            $('#file_manager_title_div input').css({
                'width':'70%',
                'height':'70%',
                'font-size':'14px',
                'padding':'5px'
            });
        }
    });

    $('#disk_usage_tile_table').dataTable({
        "bSort":false,
        "bFilter":false,
        "bInfo":false,
        initComplete: function(){
            $('#disk_usage_tile_table_length').detach().appendTo("#disk_usage_title_div").css({
                'width':'150px',
                'float':'right'
            });
            $('#disk_usage_title_div').css({
                'width':'100%',
                'height':'48px',
            });
        }
    });
}

function draw_chart(du){
    var options = {
        legend: false,
        responsive: false
    };
    var colors = ["#3498DB", "#26B99A", "#E74C3C", "#9B59B6", "#BDC3C7"];
    var labels = [];
    var data = [];
    var backgroundColor = [];
    var hoverBackgroundColor = [];

    for(var i = 0; i < du.length; i++){
        labels.push(du[i]['file_name']);
        data.push(du[i]['usage']);
        backgroundColor.push(colors[i % colors.length]);
        hoverBackgroundColor.push(colors[i % colors.length]);
    }

    new Chart(document.getElementById("disk_usage_table_canvas"), {
        type: 'doughnut',
        tooltipFillColor: "rgba(51, 51, 51, 0.55)",
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: backgroundColor,
                hoverBackgroundColor: hoverBackgroundColor
            }]
        },
        options: options
    });
}

$(function() {
    console.log("Home js");
});
