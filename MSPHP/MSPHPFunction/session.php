<?php
/* 使用session来存储用户的登录信息 */

/* session 和 cookie 区别
 *  一般来说，登录信息既可以存储在sessioin中，也可以存储在cookie中，
 *  他们之间的差别在于session可以方便的存取多种数据类型，
 *  而cookie只支持字符串类型，同时对于一些安全性比较高的数据，
 *  cookie需要进行格式化与加密存储，而session存储在服务端则安全性较高。
 */

session_start();
//假设用户登录成功获得了以下用户数据
$userinfo = array(
    'uid'  => 10000,
    'name' => 'spark',
    'email' => 'spark@imooc.com',
    'sex'  => 'man',
    'age'  => '18'
);
header("content-type:text/html; charset=utf-8");

/* 将用户信息保存到session中 */
$_SESSION['uid'] = $userinfo['uid'];
$_SESSION['name'] = $userinfo['name'];
$_SESSION['userinfo'] = $userinfo;

//* 将用户数据保存到cookie中的一个简单方法 */
$secureKey = 'mrscorpion'; //加密密钥
$str = serialize($userinfo); //将用户信息序列化
//用户信息加密前
$str = base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_256, md5($secureKey), $str, MCRYPT_MODE_ECB));
//用户信息加密后
//将加密后的用户数据存储到cookie中
setcookie('userinfo', $str);

//当需要使用时进行解密
$str = mcrypt_decrypt(MCRYPT_RIJNDAEL_256, md5($secureKey), base64_decode($str), MCRYPT_MODE_ECB);
$uinfo = unserialize($str);
echo "解密后的用户信息：<br>";
print_r($uinfo);