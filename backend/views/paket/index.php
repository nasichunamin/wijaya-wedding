<?php

use app\models\Paket;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var app\models\PaketSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'List Paket';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="paket-index">


    <p>
        <?= Html::a('Tambah Paket', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'hotel_id',
            'kategori',
            'nama',
            'harga',
            //'dekorasi:ntext',
            //'makeup_dan_busana:ntext',
            //'upacara_dan_tenda:ntext',
            //'dokumentasi:ntext',
            //'entertainment:ntext',
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, Paket $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                 }
            ],
        ],
    ]); ?>


</div>
