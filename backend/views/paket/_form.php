<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\Paket $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="paket-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'hotel_id')->textInput() ?>

    <?= $form->field($model, 'kategori')->dropDownList([ 'rumahan' => 'Rumahan', 'hotel' => 'Hotel', ], ['prompt' => '']) ?>

    <?= $form->field($model, 'nama')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'harga')->textInput() ?>

    <?= $form->field($model, 'dekorasi')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'makeup_dan_busana')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'upacara_dan_tenda')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'dokumentasi')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'entertainment')->textarea(['rows' => 6]) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
