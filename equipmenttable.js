$(document).ready( function () {
    $('#myTable').DataTable({
        columnDefs: [
          { orderable: false, targets: 1}  
          ,{ orderable: false, targets: 6}
          ,{ orderable: false, targets: 11}
        //   ,{ visible: false, targets: 15}
        ],
        order: [[0, 'asc']],
        "pageLength": 25
      });

    $('input:radio[name=rank]').change(function() {
        $('#myTable').DataTable().columns(2).search(this.value).draw();
    });

    $('input:radio[name=slot]').change(function() {
        $('#myTable').DataTable().columns(1).search(this.value).draw();
    });

    $('input:radio[name=type]').change(function() {
        $('#myTable').DataTable().columns(3).search(this.value).draw();
    });
} );