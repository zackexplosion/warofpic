<?php
//run on ever time image changes
$root = 'storage';
$files = scandir($root);
unset($files[0],$files[1]);


$pic = array();
foreach ($files as $key => $value) {
	$dir = $root . '/' . $value;
	if(is_dir($dir)){
		$images = scandir($dir);
		unset($images[0],$images[1]);

		foreach ($images as $k => $v) {
			$pic[$value][] = $v;
		}		
	}	
}

file_put_contents('db.json', json_encode($pic));
exec('zip -r storage.zip storage');

?>