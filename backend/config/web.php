<?php

$params = require __DIR__ . '/params.php';
$db = require __DIR__ . '/db.php';

$config = [
    'id' => 'basic',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'aliases' => [
        '@bower' => '@vendor/bower-asset',
        '@npm'   => '@vendor/npm-asset',
    ],
    'components' => [
        'request' => [
            'parsers' => [
                'application/json' => 'yii\web\JsonParser',
            ],
            'enableCookieValidation' => true,
            'enableCsrfValidation' => true,
            // !!! insert a secret key in the following (if it is empty) - this is required by cookie validation
            'cookieValidationKey' => 's3_GdDvVmcVFh6DGRgNfnEdit_ThcVeC',
        ],
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
        'user' => [
            'identityClass' => 'app\models\User',
            'enableAutoLogin' => true,
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        'mailer' => [
            'class' => \yii\symfonymailer\Mailer::class,
            'viewPath' => '@app/mail',
            // send all mails to a file by default.
            'useFileTransport' => true,
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'db' => $db,
    //     'view' => [
    //         'theme' => [
    //             'pathMap' => [
    //                '@app/views' => '@vendor/hail812/yii2-adminlte3/src/views'
    //             ],
    //         ],
    //    ],
        
        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules' => [
                // [
                //     // 'class' => 'yii\rest\UrlRule', 'controller' => 'transaksi',
                //     // 'extraPatterns' => [
                //     //     'PATCH pembayaran/' => 'pembayaran',
                //     // ]
                // ],
            ],
        ],
       
        'i18n' => [
            'translations' => [
                '*' => [
                    'class'          => 'yii\i18n\PhpMessageSource',
                    'basePath'       => '@app/messages', // if advanced application, set @frontend/messages
                    'sourceLanguage' => 'en',
                    'fileMap'        => [
                        //'main' => 'main.php',
                    ],
                ],
            ],
        ],
    ],
    'params' => $params,
    'controllerMap' => [
        'batch' => [
            'class' => 'schmunk42\giiant\commands\BatchController',
            'overwrite' => true,
            'modelNamespace' => 'app\\modules\\crud\\models',
            'crudTidyOutput' => true,
        ]
    ],
        // 'cors' => [
        //     'class' => 'yii\cors\Module',
        //     'params' => [
        //         'allowedHosts' => ['http://localhost:3000'], // Ganti dengan URL React JS Anda
        //     ],
        // ],
   
];

if (YII_ENV_DEV) {
    // configuration adjustments for 'dev' environment
    $config['bootstrap'][] = 'debug';
    $config['modules']['debug'] = [
        'class' => 'yii\debug\Module',
        // uncomment the following to add your IP if you are not connecting from localhost.
        //'allowedIPs' => ['127.0.0.1', '::1'],
    ];

    $config['bootstrap'][] = 'gii';
    $config['modules']['gii'] = [
        'class' => 'yii\gii\Module',
        'generators' => [ // here
            'crud' => [ // generator name
                'class' => 'yii\gii\generators\crud\Generator', // generator class
                'templates' => [ // setting for our templates
                    'yii2-adminlte3' => '@vendor/hail812/yii2-adminlte3/src/gii/generators/crud/default' // template name => path to template
                ]
            ]
        ]
        // uncomment the following to add your IP if you are not connecting from localhost.
        //'allowedIPs' => ['127.0.0.1', '::1'],
    ];
    // $config['modules']['cors'] =[
    //     'class' => 'yii\cors\Module',
    //         'params' => [
    //             'allowedHosts' => ['http://localhost:3000'], // Ganti dengan URL React JS Anda
    //         ],
    // ]
    // 'modules' => [
    //     'cors' => [
    //         'class' => 'yii\cors\Module',
    //         'params' => [
    //             'allowedHosts' => ['http://localhost:3000'], // Ganti dengan URL React JS Anda
    //         ],
    //     ],
    // ],
}

return $config;
