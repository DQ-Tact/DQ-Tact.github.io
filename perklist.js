$(document).ready( function () {
    $('#myTable').DataTable({
        order: [[0, 'asc']],
        "pageLength": 25
      });
    });