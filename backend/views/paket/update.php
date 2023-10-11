<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Paket $model */

$this->title = 'Update Paket: ' . $model->nama;
$this->params['breadcrumbs'][] = ['label' => 'List Paket', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="paket-update">


    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
