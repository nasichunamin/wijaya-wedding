<?php

use app\models\Account;
use app\models\Paket;
use yii\helpers\ArrayHelper;
use yii\helpers\Html;
use yii\widgets\ActiveForm;
use kartik\date\DatePicker;




/** @var yii\web\View $this */
/** @var app\models\Transaksi $model */
/** @var yii\widgets\ActiveForm $form */

$paket = ArrayHelper::map(Paket::find()->all(), "id", "nama");
$account = ArrayHelper::map(Account::find()->all(), "id", "username");

?>

<div class="transaksi-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'account_id')->dropDownList($account, ['prompt' => 'Pilih User', 'id' => 'hotel-id-dropdown'])->label(' User')  ?>

    <?= $form->field($model, 'paket_id')->dropDownList($paket, ['prompt' => 'Pilih Paket', 'id' => 'hotel-id-dropdown'])->label(' Paket')  ?>

    <?= $form->field($model, 'tgl_pemesanan')->widget(DatePicker::className(), [
    'options' => ['placeholder' => 'Masukkan tanggal ...'],
    'pluginOptions' => [
        'autoclose'=>true,
        'format' => 'yyyy-mm-dd',
    ]
]) ?>
    <?= $form->field($model, 'status')->dropDownList([ 'Menunggu Pembayaran' => 'Menunggu Pembayaran',  'Menunggu Konfirmasi' => 'Menunggu Konfirmasi','Disetujui' => 'Disetujui', ], ['prompt' => '']) ?>
    <?= $form->field($model, 'bukti_pembayaran')->fileInput() ?>
    <?= $form->field($model, 'tgl_pembayaran')->widget(DatePicker::className(), [
    'options' => ['placeholder' => 'Masukkan tanggal ...'],
    'pluginOptions' => [
        'autoclose'=>true,
        'format' => 'yyyy-mm-dd',

    ]
]) ?>

    <?= $form->field($model, 'alamat_pemesanan')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'createdAt')->hiddenInput(['value' => date("Y-m-d H:i:s")])->label(false) ?>

    <?= $form->field($model, 'updateAt')->hiddenInput(['value' => date("Y-m-d H:i:s")])->label(false) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
