<?php


namespace app\controllers\api;


use app\models\User;
use app\models\UserAuth;
use Yii;
use yii\filters\Cors;
use yii\rest\Controller;

class RestController extends Controller
{
    public $enableCsrfValidation = false;

    public static function allowedDomains(){
        return [
            // '*'
            'http://localhost:3000', 'https://localhost:3000', 'http://127.0.0.1:3000', 'https://127.0.0.1:3000'
        ];
    }

    public function behaviors()
    {
        // return array_merge(parent::behaviors(), [
        //     'corsFilter' => [
        //         'class' => \yii\filters\Cors::className(),
        //         'cors' => [
        //             'Origin' => static.allowedDomains(),
        //             // 'Access-Control-Request-Method' => ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
        //             'Access-Control-Request-Method' => ['POST'],
        //             // 'Access-Control-Request-Headers' => ['content-type'],
        //             'Access-Control-Allow-Credentials' => true,
        //             'Access-Control-Max-Age' => 3600,
        //         ]
        //     ]
        // ])
        $behaviors = parent::behaviors();
        // For cross-domain AJAX request
        $behaviors['corsFilter'] = [
            'class' => \yii\filters\Cors::className(),
            'cors'  => [
                // restrict access to domains:
                'Origin' => [
                    'http://localhost:3000', 
                    'https://localhost:3000', 
                    'http://127.0.0.1:3000', 
                    'https://127.0.0.1:3000'
                ],

                // Allow only POST and PUT methods
                'Access-Control-Request-Method' => ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
                // Allow only headers 'X-Wsse'
                'Access-Control-Request-Headers' => ['content-type', 'Token'],
                // Allow credentials (cookies, authorization headers, etc.) to be exposed to the browser
                'Access-Control-Allow-Credentials' => true,
                // Allow OPTIONS caching
                // 'Access-Control-Max-Age' => 86400,
                // Allow the X-Pagination-Current-Page header to be exposed to the browser.
                // 'Access-Control-Expose-Headers' => ['*'],            // Cache (seconds)
            ],
        ];

        return $behaviors;
    }
    public function beforeAction($action)
    {
        ini_set("memory_limit", "2G");
        set_time_limit(3600);

        $_GET['_format'] = "json";

        date_default_timezone_set("Asia/Jakarta");

        return parent::beforeAction($action);
    }

    public function output($data, $statusCode = 200)
    {
        \Yii::$app->response->setStatusCode($statusCode);

        return $data;
    }

    public function getRawBody()
    {
        $raw = file_get_contents("php://input");
        $raw = json_decode($raw, true);
        return $raw;
    }

    /**
     * @return User|null
     */
    public function getAuthUser()
    {
        $headers = Yii::$app->request->headers;
        $tokenStr = $headers["Token"];
        /** @var UserAuth $token */
        $token = UserAuth::find()->where(["token" => $tokenStr])->one();
        if ($token) {
            return $token->account;
        }

        return $this->error("Not authenticated", 500);

    }

    public function error($message, $code){
        Yii::$app->response->setStatusCode($code);

        return [ 
            "code" => $code,
            "message" => $message,
        ];
    }
}
