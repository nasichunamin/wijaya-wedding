<?php

namespace app\controllers\api;

/**
* This is the class for REST controller "HotelController".
*/

use app\models\Hotel;
use yii\filters\AccessControl;
use yii\helpers\ArrayHelper;

class HotelController extends RestController
{

    public function actionList()
    {
        return $this->output(Hotel::find()->all());
    }
}
