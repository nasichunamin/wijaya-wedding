<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Hotel $model */

$this->title = 'Edit Hotel: ' . $model->nama;
$this->params['breadcrumbs'][] = ['label' => 'List Hotel', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="hotel-update">


    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
