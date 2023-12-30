<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\Paket $model */

$this->title = $model->nama;
$this->params['breadcrumbs'][] = ['label' => 'List Paket', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="paket-view">


    <p>
        <?= Html::a('Edit', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Hapus', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'hotel_id',
            'kategori',
            'nama',
            'harga',
            [
                'attribute' => 'gambar',
                'format' => 'html',
                'value' => function ($data) {
                    return Html::img('../../uploads/image/paket/' . $data['gambar'], ['class' => 'w-25'] );
                },
                // 'className' => 'w-25'

            ],
            'dekorasi:ntext',
            'makeup_dan_busana:ntext',
            'upacara_dan_tenda:ntext',
            'dokumentasi:ntext',
            'entertainment:ntext',
        ],
    ]) ?>

</div>
