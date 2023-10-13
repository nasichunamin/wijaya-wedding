<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Transaksi $model */

$this->title = 'Tambah Transaksi';
$this->params['breadcrumbs'][] = ['label' => 'List Transaksi', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="transaksi-create">


    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
