$(document).ready( function () {
    $('#myTable').DataTable({
        columnDefs: [
          { orderable: false, targets: 1}  
          ,{ visible: false, targets: 13}
          ,{ visible: false, targets: 14}
        ],
        order: [[0, 'asc']],
        "pageLength": 25
      });

    $('input:radio[name=rank]').change(function() {
        $('#myTable').DataTable().columns(3).search(this.value).draw();
    });
    
    $('input:radio[name=family]').change(function() {
      $('#myTable').DataTable().columns(4).search(this.value).draw();
    });

    $('#TalentBlossom').change(function() {
      if ($(this).is(':checked')) {
        $('#myTable').DataTable().columns(13).search("1").draw();
      } else {
        $('#myTable').DataTable().columns(13).search("").draw();
      }
    });
    
    $('#CharBuilder').change(function() {
      if ($(this).is(':checked')) {
        $('#myTable').DataTable().columns(14).search("1").draw();
      } else {
        $('#myTable').DataTable().columns(14).search("").draw();
      }
    });
} );

