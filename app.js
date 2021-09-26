$(document).ready(function () {
  $("#input").on("keyup", function () {
    var val = $("#input").val();

    $.ajax({
      url: "process.php",
      type: "post",
      data: { text: val },
      success: function (status) {
        $("#md5").text(status);
      },
    });
  });
});
