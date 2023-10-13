<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Transaksi $model */

$this->title = 'Edit Transaksi: ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => 'List Transaksi', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="transaksi-update">


    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
