<?php

namespace app\controllers;

class TransaksiController extends \yii\rest\ActiveController
{
    public function actionIndex()
    {
        return $this->render('index');
    }

}
