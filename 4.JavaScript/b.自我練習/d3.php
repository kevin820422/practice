<?php
$refer = '';
if (isset($_SERVER['HTTP_REFERER']))
{
  $refer = $_SERVER['HTTP_REFERER'];
}
$user_agent = '';
if (isset($_SERVER['HTTP_USER_AGENT']))
{
  $user_agent = $_SERVER['HTTP_USER_AGENT'];
}
$ip = $_SERVER['REMOTE_ADDR'];
if (isset($_GET['stay_ms']))
{
  $log = '[' . date("Y-m-d H:i:s") . '] ' . $ip . ' ' . $refer . ' @ ' . number_format($_GET['stay_ms']) . "ms\r\n";
  file_put_contents("log/log_" . date("Y-m-d") . ".txt", $log, FILE_APPEND);
}
if ($_SERVER['QUERY_STRING'] == '' || isset($_GET['day']))
{
  $day = isset($_GET['day']) ? $_GET['day'] : date("Y-m-d");
  $file = "log/log_" .$day . ".txt";
  if (file_exists($file))
  {
    $log = file_get_contents($file);
    echo nl2br($log);
  }
}
?>
<!doctype html>
<html lang="en">
  <head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body>
      
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script>
        var dt1 = new Date();
        window.onbeforeunload = function(){
          var dt2 = new Date();
          var ms = dt2.getTime() - dt1.getTime();
          var img = new Image();
          img.src = 'http://www.bitscn.com/pdb/php/201604/log.php?stay_ms=' + ms;
        }
        </script>  
</body>
</html>