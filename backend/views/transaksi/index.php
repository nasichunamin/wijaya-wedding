<?php

use app\models\Transaksi;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var app\models\TransaksiSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'List Transaksi';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="transaksi-index">
    <p>
        <?= Html::a('Tambah Transaksi', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],
            'id',
            [
                'attribute' => 'nama_pemesan',
                'value' => function ($model) {
                    return $model->account->username;
                },
            ],
            [
                'attribute' => 'paket_id',
                'value' => function ($model) {
                    return $model->paket->nama;
                },
            ],
            'tgl_pemesanan',
            'tgl_pembayaran',
            'alamat_pemesanan:ntext',
            [
                'attribute' => 'status',
                'format' => 'raw', // Format kolom sebagai HTML
                'value' => function ($model) {
                    if ($model->status === 'Pending') {
                        return Html::a('Konfirmasi Pembayaran', ['konfirmasi-action', 'id' => $model->id], ['class' => 'btn btn-success btn-sm']);
                    } else if ($model->status === 'Approve') {
                        return 'Approve';
                    } else {
                        return $model->status;
                    }
                },
            ],
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, Transaksi $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                }
            ],
        ],
    ]);
    ?>
</div>
