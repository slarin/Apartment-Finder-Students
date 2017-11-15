<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Results Page</title>
<link href="finalresults.css" rel="stylesheet" type="text/css">
</head>

<body>
<div id="indexPage">

<div id="header">

</div>

<?php
$apmtType = $_POST['apmt'];
$prcLimit = intval($_POST['prc']);
$container = $_POST['cont'];

if (empty($container) || empty($prcLimit) || empty($apmtType)){
	echo 'empty';
	}
 else echo $apmtType, $prcLimit, $container;


/*$dbc = mysqli_connect('localhost', 'root','','apartment_search')
       or die('Error connecting to database');

$query = "select * from $container where apartment_type = '$aptType' and apartment_price <= '$prcLimit'" order by distance desc;

$result = mysqli_query($dbc, $query)
          or die('Error querying database...');

//$row = $result->fetch_assoc();

if (mysqli_num_rows($result) >0){
	
	 while ($row = mysqli_fetch_array($result)){
		 echo '<div id= finalResultsContainer>';
		 		 
		 echo '<div id= A2>';
		 echo '<p class="resListItem">'.$row["apartment_type"].'</p>';
		 echo '<p class="resListItem">'.$row["apartment_price"].'CFA per month'.'</p>';
		 echo '<p class="resListItem">'.'Location: '.$row["apartment_location"].'</p>';
		 echo '<p class="resListItem">'.'Contact: '.$row["contact"].'</p>';
		 echo '<p class="resListItem">'.'Distance: '.$row["distance"].'</p>';
         echo '</div>';
		 
		 echo '<div id= A1>';
		 echo '<p>'.$row["image"].'</p>';
		 echo '</div>';
		 
         echo '</div>';
    }
 }
  else{
	echo '<div id= noResultsContainer>';
	echo '<p>No Results</p>';
	echo '</div>';  
  }

mysqli_close($dbc);*/

?>

</div>
</body>
</html>