$(document).ready( function () {
    $('#myTable').DataTable({
        columnDefs: [
            { orderable: false, targets: 0}
            ,{ orderable: false, targets: 3}
            ,{ orderable: false, targets: 4}
            ,{ visible: false, targets: 7}
            ,{ visible: false, targets: 8}
            ,{ visible: false, targets: 9}
            ,{ visible: false, targets: 10}
        ],
        order: [[2, 'asc']],
        "pageLength": 25
      });

    $('input:radio[name=rank]').change(function() {
        $('#myTable').DataTable().columns(7).search(this.value).draw();
    });
    
    $('input:radio[name=colour]').change(function() {
      $('#myTable').DataTable().columns(8).search(this.value).draw();
    });

    $('input:radio[name=type]').change(function() {
        $('#myTable').DataTable().columns(9).search(this.value).draw();
      });

    $('input:radio[name=element]').change(function() {
        $('#myTable').DataTable().columns(10).search(this.value).draw();
    });

    $('#TalentBlossom').change(function() {
      if ($(this).is(':checked')) {
        $('#myTable').DataTable().columns(3).search("&").draw();
      } else {
        $('#myTable').DataTable().columns(3).search("").draw();
      }
    });

} );