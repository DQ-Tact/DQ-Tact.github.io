$(document).ready( function () {
    $('#myTable').DataTable({
        columnDefs: [
          { orderable: false, targets: 1}
          ,{ orderable: false, targets: 3}
          ,{ orderable: false, targets: 4}
        ],
        order: [[0, 'asc']]
      });
} );