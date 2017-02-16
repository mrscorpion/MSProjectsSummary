<?php
$img = imagecreatetruecolor(100, 100);
$red = imagecolorallocate($img, 0xFF, 0x00, 0x00);
imagestring($img, 5, 0, 0, "Hello world", $red);
//在这里将图片保存到$filename文件中
// $filename = 'img.png';
// imagepng($img, $filename);
// 使用imagepng可以将图像保存成png格式，使用imagejpeg将图片保存成jpeg格式，imagegif将图片保存成gif格式，需要说明的是，imagejpeg会对图片进行压缩，因此还可以设置一个质量参数。
$filename = 'image.jpg';
imagejpeg($img, $filename, 80);

imagedestroy($img);
if (file_exists($filename)) {
    echo '文件保存成功';
}
