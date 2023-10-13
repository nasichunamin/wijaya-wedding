<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\TransaksiSearch $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="transaksi-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'account_id') ?>

    <?= $form->field($model, 'paket_id') ?>

    <?= $form->field($model, 'tgl_pemesanan') ?>

    <?= $form->field($model, 'status') ?>

    <?php // echo $form->field($model, 'tgl_pembayaran') ?>

    <?php // echo $form->field($model, 'alamat_pemesanan') ?>

    <?php // echo $form->field($model, 'createdAt') ?>

    <?php // echo $form->field($model, 'updateAt') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
