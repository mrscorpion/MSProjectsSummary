<?php
//这里仅仅是为了案例需要准备一些素材图片
$url = 'firefly2.jpg';
$content = file_get_contents($url);
$filename = 'tmp.jpg';
file_put_contents($filename, $content);
$url = 'file_ico.png';
file_put_contents('ico.png', file_get_contents($url));
//开始添加水印操作
$im = imagecreatefromjpeg($filename);
// $logo = imagecreatefrompng('logo.png');
$logo = imagecreatefrompng('ico.png');
// $size = getimagesize('logo.png');
$size = getimagesize('ico.png');
imagecopy($im, $logo, 30, 20, 0, 0, $size[0], $size[1]);

header("content-type: image/jpeg");
imagejpeg($im);