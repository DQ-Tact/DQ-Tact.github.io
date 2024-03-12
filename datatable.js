$(document).ready( function () {
    $('#myTable').DataTable({
        columnDefs: [
          { orderable: false, targets: 1}
          ,{ orderable: false, targets: 3}
          ,{ orderable: false, targets: 4}
          ,{ visible: false, targets: 13}
          ,{ visible: false, targets: 14}
          ,{ visible: false, targets: 15}
          ,{ visible: false, targets: 16}
        ],
        order: [[0, 'asc']],
        "pageLength": 25
      });

    $('input:radio[name=rank]').change(function() {
        $('#myTable').DataTable().columns(13).search(this.value).draw();
    });
    
    $('input:radio[name=family]').change(function() {
      $('#myTable').DataTable().columns(14).search(this.value).draw();
    });

    $('#TalentBlossom').change(function() {
      if ($(this).is(':checked')) {
        $('#myTable').DataTable().columns(15).search("1").draw();
      } else {
        $('#myTable').DataTable().columns(15).search("").draw();
      }
    });
    
    $('#CharBuilder').change(function() {
      if ($(this).is(':checked')) {
        $('#myTable').DataTable().columns(16).search("1").draw();
      } else {
        $('#myTable').DataTable().columns(16).search("").draw();
      }
    });
} );

