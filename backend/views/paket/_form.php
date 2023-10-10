<?php

use app\models\Hotel;
use yii\helpers\ArrayHelper;
use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\Paket $model */
/** @var yii\widgets\ActiveForm $form */
$hotel = ArrayHelper::map(Hotel::find()->all(), "id", "nama");

?>

<div class="paket-form ">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'nama')->textInput(['maxlength' => true]) ?>
    <?= $form->field($model, 'kategori')->dropDownList([ 'rumahan' => 'Rumahan', 'hotel' => 'Hotel', ], ['prompt' => 'Pilih Kategori', 'id' => 'kategori-dropdown']) ?>
    <div class="hotel-id-dropdown" style="display: none;">
    <?= $form->field($model, 'hotel_id')->dropDownList($hotel, ['prompt' => 'Pilih Hotel', 'id' => 'hotel-id-dropdown'])->label('Pilih Hotel')  ?>
    </div>
    

    

    <?= $form->field($model, 'harga')->textInput() ?>

    <?= $form->field($model, 'dekorasi')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'makeup_dan_busana')->textarea(['rows' => 6]) ?>

   

    <?= $form->field($model, 'dokumentasi')->textarea(['rows' => 6]) ?>

    <div class="hotel-id-dropdown" style="display: none;">
    <?= $form->field($model, 'entertainment')->textarea(['rows' => 6]) ?>
    </div>
    <div class="rumahan-dropdown"">
    <?= $form->field($model, 'upacara_dan_tenda')->textarea(['rows' => 6]) ?>
    </div>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

<?php
$script = <<< JS
    $('#kategori-dropdown').change(function() {
        var selectedKategori = $(this).val();
        if (selectedKategori === 'hotel') {
            $('.hotel-id-dropdown').show();
            $('.rumahan-dropdown').hide();
        } else {
            $('.hotel-id-dropdown').hide();
            $('.rumahan-dropdown').show();

        }
    });
JS;

$this->registerJs($script);
?>
</div>
