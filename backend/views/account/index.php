<?php

use app\models\Account;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var app\models\AccountSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'User';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="account-index">


    

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'username',
            'password',
            'role',
            'nama_lengkap',
            //'jenis_kelamin',
            //'tgl_lahir',
            //'no_telepon',
            //'token',
            //'createdAt',
            //'updatedAt',
            //'deleteAt',
            [
                'class' => ActionColumn::className(),
    'template' => '{view} {delete}', // Hanya menampilkan tombol view (detail) dan delete (hapus)
    'urlCreator' => function ($action, Account $model, $key, $index, $column) {
        return Url::toRoute([$action, 'id' => $model->id]);
    },
            ],
        ],
    ]); ?>


</div>
