$(document).ready( function () {
    $('#myTable').DataTable({
        columnDefs: [
          { orderable: false, targets: 0}  
        ],
        order: [[1, 'asc']],
        "pageLength": 25
      });
    });
