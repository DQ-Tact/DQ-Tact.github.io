$(document).ready( function () {
    $('#myTable').DataTable({
        columnDefs: [
          { orderable: false, targets: 1}  
          ,{ orderable: false, targets: 6}
          ,{ orderable: false, targets: 10}
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

    $('input:radio[name=stat]').change(function() {
        $('#myTable').DataTable().columns(4).search(this.value).draw();
    });

    $('#Arena').change(function() {
      if ($(this).is(':checked')) {
        $('#myTable').DataTable().columns(0).search("&").draw();
      } else {
        $('#myTable').DataTable().columns(0).search("").draw();
      }
    });
} );