<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\PaketSearch $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="paket-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'hotel_id') ?>

    <?= $form->field($model, 'kategori') ?>

    <?= $form->field($model, 'nama') ?>

    <?= $form->field($model, 'harga') ?>

    <?php // echo $form->field($model, 'dekorasi') ?>

    <?php // echo $form->field($model, 'makeup_dan_busana') ?>

    <?php // echo $form->field($model, 'upacara_dan_tenda') ?>

    <?php // echo $form->field($model, 'dokumentasi') ?>

    <?php // echo $form->field($model, 'entertainment') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
