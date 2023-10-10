<?php

use app\models\Hotel;
use yii\helpers\ArrayHelper;
use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\Paket $model */

$this->title = 'Tambah Paket';
$this->params['breadcrumbs'][] = ['label' => 'List Paket', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
$hotel = ArrayHelper::map(Hotel::find()->all(), "id", "nama");
$kategori= ['Rumahan' => 'Rumahan', 'Hotel' => 'Hotel'];

?>
<div class="paket-create">

    <?php
    $form = ActiveForm::begin();

    ?>
    <?= $form->field($model, 'nama')->textInput() ?>
    <?= $form->field($model, 'kategori')->dropDownList($kategori, ['prompt' => 'Pilih Kategori']) ?>
    <?= $form->field($model, 'hotel_id')->dropDownList($hotel, ['prompt' => 'Pilih Hotel']) ?>
    <?= $form->field($model, 'harga')->textInput() ?>
    <?= $form->field($model, 'dekorasi')->textInput(['maxlength' => true]) ?>
    <?= $form->field($model, 'makeup_dan_busana')->textInput(['maxlength' => true]) ?>
    <?= $form->field($model, 'upacara_dan_tenda')->textInput(['maxlength' => true]) ?>
    <?= $form->field($model, 'entertainment')->textInput(['maxlength' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>
    <?php ActiveForm::end(); ?>


</div>
